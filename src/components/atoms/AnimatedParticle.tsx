interface AnimatedParticleProps {
  size: string;
  colorClass: string;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  animationType?: 'pulse' | 'bounce';
}

export const AnimatedParticle = ({
  size,
  colorClass,
  left,
  top,
  animationDelay,
  animationDuration,
  animationType = 'pulse'
}: AnimatedParticleProps) => {
  return (
    <span
      className={`absolute ${size} ${colorClass} rounded-full animate-${animationType}`}
      style={{
        left,
        top,
        animationDelay,
        animationDuration,
      }}
    />
  );
};
