import { FloatingOrb } from '@/components/atoms/FloatingOrb';

export function ContactBackground() {
  return (
    <aside className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 block" />

      {/* Animated gradient overlays */}
      <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse block" />

      {/* Large floating orbs */}
      <FloatingOrb
        size="w-96 h-96"
        colorFrom="cyan-400/10"
        colorTo="blue-400/10"
        left="10%"
        top="20%"
        blur="3xl"
        animationDuration="8s"
      />

      <FloatingOrb
        size="w-[500px] h-[500px]"
        colorFrom="blue-400/10"
        colorTo="purple-400/10"
        left="70%"
        top="60%"
        blur="3xl"
        animationDelay="2s"
        animationDuration="10s"
      />

      <FloatingOrb
        size="w-80 h-80"
        colorFrom="purple-400/10"
        colorTo="pink-400/10"
        left="50%"
        top="10%"
        blur="3xl"
        animationDelay="4s"
        animationDuration="9s"
      />

      {/* Small floating particles */}
      <span className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-float left-[15%] top-[30%] block" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <span className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float left-[85%] top-[25%] block" style={{ animationDelay: '1s', animationDuration: '5s' }} />
      <span className="absolute w-2 h-2 bg-purple-400/40 rounded-full animate-float left-[25%] top-[75%] block" style={{ animationDelay: '2s', animationDuration: '6s' }} />
      <span className="absolute w-2 h-2 bg-pink-400/40 rounded-full animate-float left-[75%] top-[80%] block" style={{ animationDelay: '3s', animationDuration: '4.5s' }} />

      {/* Grid pattern overlay */}
      <span
        className="absolute inset-0 opacity-[0.03] block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </aside>
  );
}
