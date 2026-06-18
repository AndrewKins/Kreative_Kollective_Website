import { useState, useEffect } from "react";

function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("slam"), 50);
    const t2 = setTimeout(() => setPhase("flash"), 400);
    const t3 = setTimeout(() => setPhase("hold"), 550);
    const t4 = setTimeout(() => setPhase("exit"), 1600);
    const t5 = setTimeout(() => onComplete(), 2100);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  return (
    <div
      className="font-['Rye'] fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: phase === "flash" ? "#cc0000" : "#000000",
        transition: phase === "flash" ? "background 0.05s" : "background 0.3s",
        opacity: phase === "exit" ? 0 : 1,
        transform: phase === "exit" ? "scale(1.05)" : "scale(1)",
        transitionProperty: phase === "exit" ? "opacity, transform" : "background",
        transitionDuration: phase === "exit" ? "0.5s" : undefined,
        pointerEvents: phase === "exit" ? "none" : "all",
      }}
    >
      {/* Horizontal slash lines */}
      <div
        className="absolute inset-0 flex flex-col justify-center gap-0 pointer-events-none"
        style={{ opacity: phase === "hold" || phase === "exit" ? 0.06 : 0, transition: "opacity 0.4s" }}
      >
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-full h-px bg-red-600" style={{ marginBottom: "40px" }} />
        ))}
      </div>

      {/* KK Logo */}
      <div
        style={{
          transform:
            phase === "idle"
              ? "scale(4) translateY(-20px)"
              : phase === "slam"
              ? "scale(4) translateY(-20px)"
              : phase === "flash"
              ? "scale(1.08) translateY(0px)"
              : phase === "hold"
              ? "scale(1) translateY(0px)"
              : "scale(0.95) translateY(0px)",
          opacity: phase === "idle" ? 0 : 1,
          transition:
            phase === "slam"
              ? "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.1s"
              : phase === "flash"
              ? "transform 0.08s ease-out"
              : "transform 0.2s ease-out, opacity 0.4s ease-out",
          animation: phase === "flash" ? "shake 0.3s ease-out" : "none",
        }}
      >
        <div
          className="font-black text-center leading-none select-none"
          style={{ fontSize: "clamp(80px, 20vw, 160px)", letterSpacing: "-0.05em" }}
        >
          <span style={{ color: "#cc0000" }}>K</span>
          <span style={{ color: "#ffffff" }}>K</span>
        </div>
      </div>

      {/* Tagline */}
      <div
        className="mt-4 text-center"
        style={{
          opacity: phase === "hold" ? 1 : 0,
          transform: phase === "hold" ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
        }}
      >
        <p className="text-white font-black uppercase tracking-[0.2em] text-sm">
          Kreative Kollective
        </p>
        <p className="text-yellow-500 font-bold uppercase tracking-widest text-xs mt-1">
          Step. Lead. Create. Ascend.
        </p>
      </div>

      {/* Bottom gold bar that sweeps in */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-yellow-500"
        style={{
          width: phase === "hold" || phase === "exit" ? "100%" : "0%",
          transition: "width 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
        }}
      />

      <style>{`
        @keyframes shake {
          0%   { transform: scale(1.08) translateX(0); }
          20%  { transform: scale(1.08) translateX(-8px); }
          40%  { transform: scale(1.08) translateX(8px); }
          60%  { transform: scale(1.08) translateX(-5px); }
          80%  { transform: scale(1.08) translateX(5px); }
          100% { transform: scale(1.08) translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default Preloader;