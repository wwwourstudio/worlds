"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";

const archetypes = [
  { name: "Equilibrium", desc: "Homeostatic systems that resist entropy. Resources regenerate at consumption rate. Population remains stable. Time flows uniformly." },
  { name: "Expansion", desc: "Growth-oriented economies. Early adopters capture asymmetric value. Network effects amplify participation. Exponential trajectory until resource ceiling." },
  { name: "Decay", desc: "Entropy-maximizing systems. Resources deplete irreversibly. Stakeholder value diminishes over time. Terminal state is inevitable." },
  { name: "Cycle", desc: "Periodic oscillation between states. Seasons of abundance and scarcity. Stakeholder returns vary with phase position. No permanent equilibrium." },
  { name: "Threshold", desc: "State transitions triggered by collective milestones. Dormant until activation criteria met. Sudden phase changes reshape all internal mechanics." },
  { name: "Fork", desc: "Designed for replication and mutation. Stakeholders can clone world state and modify DNA. Child worlds inherit parent infrastructure but diverge immediately." },
  { name: "Collapse", desc: "Intentionally unstable. High volatility in all parameters. Stakeholder returns are speculative. World may cease to exist without warning." },
];

const steps = ["Identity", "DNA Config", "Economics", "Confirm"];

export default function MintPage() {
  const [step, setStep] = useState(0);
  const [worldName, setWorldName] = useState("");
  const [worldDesc, setWorldDesc] = useState("");
  const [archetype, setArchetype] = useState("");

  const canContinue = step === 0 ? worldName.trim() && archetype : true;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Step indicator */}
      <div className="mb-10 flex items-center gap-0">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full border font-mono text-xs transition-colors ${
              i < step ? "border-white/60 bg-white/10 text-white/60" :
              i === step ? "border-white text-white" :
              "border-white/20 text-white/20"
            }`}>
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </div>
            <span className={`mx-3 font-mono text-xs uppercase tracking-widest ${
              i === step ? "text-white" : "text-white/30"
            }`}>{s}</span>
            {i < steps.length - 1 && <div className="mr-3 h-px w-8 bg-white/10" />}
          </div>
        ))}
      </div>

      {/* Step 1: Identity */}
      {step === 0 && (
        <div>
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30">
            Step 1 of 4
          </div>
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white">Define World Identity</h1>
          <p className="mb-10 max-w-2xl font-mono text-sm text-white/50">
            Name your world and select its archetype. This choice shapes fundamental behavior.
          </p>

          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <label className="mb-3 block font-mono text-xs uppercase tracking-widest text-white/30">
                World Name
              </label>
              <input
                type="text"
                value={worldName}
                onChange={(e) => setWorldName(e.target.value)}
                placeholder="Enter world name"
                className="h-12 w-full border border-white/10 bg-transparent px-3 text-lg font-light text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="border border-white/10 p-6">
              <label className="mb-3 block font-mono text-xs uppercase tracking-widest text-white/30">
                World Description
              </label>
              <textarea
                value={worldDesc}
                onChange={(e) => setWorldDesc(e.target.value)}
                placeholder="Describe the purpose and nature of this world"
                rows={3}
                className="w-full border border-white/10 bg-transparent px-3 py-2 font-light text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/30">
                World Archetype
              </div>
              <div className="space-y-2">
                {archetypes.map((a) => (
                  <button
                    key={a.name}
                    onClick={() => setArchetype(a.name)}
                    className={`w-full border p-5 text-left transition-all ${
                      archetype === a.name
                        ? "border-white/40 bg-white/5"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="mb-1.5 flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full border transition-colors ${
                        archetype === a.name ? "border-white bg-white" : "border-white/30"
                      }`} />
                      <span className="text-lg font-light text-white">{a.name}</span>
                    </div>
                    <p className="pl-5 font-mono text-xs leading-relaxed text-white/50">{a.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: DNA Config */}
      {step === 1 && (
        <div>
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30">Step 2 of 4</div>
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white">DNA Configuration</h1>
          <p className="mb-10 font-mono text-sm text-white/50">
            Define the immutable genetic parameters of <span className="text-white">{worldName}</span>.
          </p>
          <div className="space-y-4">
            {[
              { label: "Entropy Rate", value: "0.3", unit: "per tick" },
              { label: "Energy Regeneration", value: "2.1", unit: "RE/hr baseline" },
              { label: "Max Population Density", value: "10,000", unit: "entities" },
              { label: "Time Dilation Factor", value: "1.0×", unit: "vs real time" },
            ].map((param) => (
              <div key={param.label} className="flex items-center justify-between border border-white/10 px-6 py-4">
                <div className="font-mono text-sm text-white/60">{param.label}</div>
                <div className="text-right">
                  <span className="text-lg font-light text-white">{param.value}</span>
                  <span className="ml-2 font-mono text-xs text-white/30">{param.unit}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-white/10 bg-white/[0.02] p-6">
            <p className="font-mono text-xs text-white/40">
              DNA parameters are immutable after minting. These values are encoded at the genesis block and cannot be modified by any party, including the creator.
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Economics */}
      {step === 2 && (
        <div>
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30">Step 3 of 4</div>
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white">Economic Structure</h1>
          <p className="mb-10 font-mono text-sm text-white/50">Configure stakeholder allocation and revenue distribution.</p>
          <div className="space-y-4">
            {[
              { label: "Total Stakeholder NFTs", value: "1,000", desc: "Maximum supply at genesis" },
              { label: "Creator Allocation", value: "10%", desc: "100 NFTs reserved for creator" },
              { label: "Revenue Share", value: "Pro-rata", desc: "Proportional to NFT holdings" },
              { label: "Platform Fee", value: "2.5%", desc: "Infrastructure maintenance" },
            ].map((item) => (
              <div key={item.label} className="flex items-start justify-between border border-white/10 px-6 py-4">
                <div>
                  <div className="font-mono text-sm text-white/60">{item.label}</div>
                  <div className="mt-0.5 font-mono text-xs text-white/30">{item.desc}</div>
                </div>
                <div className="text-xl font-light text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Confirm */}
      {step === 3 && (
        <div>
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30">Step 4 of 4</div>
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white">Confirm & Mint</h1>
          <p className="mb-10 font-mono text-sm text-white/50">Review your world configuration before committing to the ledger.</p>

          <div className="mb-6 border border-white/10">
            {[
              { k: "Name", v: worldName || "—" },
              { k: "Archetype", v: archetype || "—" },
              { k: "Stakeholder NFTs", v: "1,000" },
              { k: "Creator Allocation", v: "10%" },
              { k: "Mint Cost", v: "0.5 ETH" },
            ].map((row) => (
              <div key={row.k} className="flex items-center justify-between border-b border-white/10 px-6 py-4 last:border-b-0">
                <div className="font-mono text-xs uppercase tracking-widest text-white/30">{row.k}</div>
                <div className="font-light text-white">{row.v}</div>
              </div>
            ))}
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-6 mb-8">
            <p className="font-mono text-xs leading-relaxed text-white/40">
              Minting is irreversible. Once committed, the DNA configuration cannot be altered by any party. You will receive 100 Stakeholder NFTs to your connected wallet.
            </p>
          </div>

          <Link href="/worlds">
            <button className="w-full border border-white/40 bg-white py-4 font-mono text-sm uppercase tracking-widest text-black hover:bg-white/90 transition-colors">
              Mint World →
            </button>
          </Link>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        {step > 0 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="border border-white/10 px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white hover:border-white/30 transition-colors"
          >
            Back
          </button>
        ) : <div />}

        {step < steps.length - 1 && (
          <button
            onClick={() => canContinue && setStep(step + 1)}
            disabled={!canContinue}
            className="flex items-center gap-2 border border-white/20 px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-white hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Continue <ChevronRight className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Constraints */}
      <div className="mt-16 border border-white/10 bg-white/[0.02] p-6">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-white/20">Constraints</div>
        <div className="space-y-2 font-mono text-xs text-white/40">
          <p>All worlds are sovereign and isolated. No cross-world communication or resource transfer exists after minting.</p>
          <p>Founders retain exclusive control over world parameters but cannot modify the sacred constraint or archetype.</p>
        </div>
      </div>
    </div>
  );
}
