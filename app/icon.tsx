import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
