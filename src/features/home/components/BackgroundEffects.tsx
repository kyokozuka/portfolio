interface Particle {
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const blueParticles: Particle[] = [
  { left: "10%", top: "20%", delay: "0s", duration: "15s" },
  { left: "80%", top: "40%", delay: "2s", duration: "18s" },
  { left: "30%", top: "60%", delay: "4s", duration: "20s" },
  { left: "70%", top: "80%", delay: "1s", duration: "16s" },
  { left: "50%", top: "10%", delay: "3s", duration: "17s" },
  { left: "20%", top: "90%", delay: "5s", duration: "19s" },
];

const purpleParticles: Particle[] = [
  { left: "15%", top: "30%", delay: "1s", duration: "14s" },
  { left: "85%", top: "50%", delay: "3s", duration: "16s" },
  { left: "40%", top: "70%", delay: "5s", duration: "18s" },
  { left: "60%", top: "15%", delay: "2s", duration: "15s" },
  { left: "25%", top: "85%", delay: "4s", duration: "17s" },
];

export default function BackgroundEffects() {
  return (
    <section className="fixed inset-0 pointer-events-none z-0">
      {blueParticles.map((particle: Particle, index: number) => (
        <span
          key={`blue-${index}`}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float block"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
      {purpleParticles.map((particle: Particle, index: number) => (
        <span
          key={`purple-${index}`}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-float block"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </section>
  );
}
