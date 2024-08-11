import "./svg.css";

export default function PulseAnimation() {
  return (
    <div className="hidden lg:block border-l border-violet-400/50 my-10">
      <svg viewBox="0 0 1320 300" className="absolute w-1/2 h-full">
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          pulse
        </text>
      </svg>
    </div>
  );
}
