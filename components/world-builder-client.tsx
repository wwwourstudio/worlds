"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Maximize2, Users, EyeOff } from "lucide-react";
import * as THREE from "three";

const MODES = ["Builder", "Advisor", "Historian", "Optimizer"] as const;
type Mode = (typeof MODES)[number];

interface Message {
  role: "assistant" | "user";
  content: string;
  time: string;
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "Welcome to the AI World Builder. Just tell me what you want to create and I'll help you build it. Need a dragon? A medieval castle? A futuristic vehicle? Just ask—I have access to millions of 3D models.",
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

function WorldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 3;

    // Planet wireframe
    const geo = new THREE.IcosahedronGeometry(1, 4);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const planet = new THREE.Mesh(geo, mat);
    scene.add(planet);

    // Inner solid sphere
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.95,
    });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.98, 32, 32), coreMat);
    scene.add(core);

    // Equatorial ring
    const ringGeo = new THREE.TorusGeometry(1.25, 0.002, 2, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    // Star particles
    const starGeo = new THREE.BufferGeometry();
    const starCount = 800;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 40;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.04, transparent: true, opacity: 0.4 })
    );
    scene.add(stars);

    // Orbit markers
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const markerGeo = new THREE.SphereGeometry(0.025, 8, 8);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(Math.cos(angle) * 1.25, 0, Math.sin(angle) * 1.25);
      scene.add(marker);
    }

    function resize() {
      const { clientWidth: w, clientHeight: h } = canvas!;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let frame = 0;
    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      frame++;
      planet.rotation.y += 0.001;
      planet.rotation.x += 0.0003;
      ring.rotation.z += 0.0005;
      stars.rotation.y -= 0.0001;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      starGeo.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}

export default function WorldBuilderClient() {
  const [mode, setMode] = useState<Mode>("Builder");
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [sceneHidden, setSceneHidden] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function send() {
    const text = input.trim();
    if (!text) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [
      ...prev,
      { role: "user", content: text, time },
      {
        role: "assistant",
        content: `Processing "${text}" in ${mode} mode. Searching 3D model library…`,
        time,
      },
    ]);
    setInput("");
    inputRef.current?.focus();
  }

  return (
    <div className="flex h-full">
      {/* Chat panel */}
      <div className="flex w-96 flex-shrink-0 flex-col border-r border-white/10 bg-black">
        {/* Mode switcher */}
        <div className="grid grid-cols-2 gap-2 border-b border-white/10 p-3">
          {MODES.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                mode === m
                  ? "bg-white text-black"
                  : "border border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 p-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded px-3 py-2 text-sm font-light leading-relaxed ${
                  msg.role === "user"
                    ? "bg-white/10 text-white"
                    : "bg-white/5 border border-white/10 text-white/80"
                }`}
              >
                <div>{msg.content}</div>
                <div className="mt-1 font-mono text-[10px] text-white/30">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-3">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Describe what you want to create…"
              className="flex-1 border border-white/10 bg-transparent px-3 py-2 font-mono text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="border border-white/20 p-2 text-white/60 hover:text-white hover:border-white/40 transition-colors disabled:opacity-30"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Canvas area */}
      <div className="relative flex-1 bg-black overflow-hidden">
        {sceneHidden ? (
          <div className="flex h-full items-center justify-center">
            <div className="font-mono text-xs uppercase tracking-widest text-white/20">
              Scene hidden
            </div>
          </div>
        ) : (
          <WorldCanvas />
        )}

        {/* Floating controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={() => setSceneHidden(!sceneHidden)}
            className="border border-white/10 bg-black/80 p-2 text-white/40 hover:text-white backdrop-blur transition-colors"
            title={sceneHidden ? "Show scene" : "Hide scene"}
          >
            <EyeOff className="h-4 w-4" />
          </button>
          <button className="border border-white/10 bg-black/80 p-2 text-white/40 hover:text-white backdrop-blur transition-colors">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button className="border border-white/10 bg-black/80 p-2 text-white/40 hover:text-white backdrop-blur transition-colors">
            <Users className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
