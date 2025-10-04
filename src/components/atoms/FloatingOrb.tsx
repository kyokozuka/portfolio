interface FloatingOrbProps {
  size: string;
  colorFrom: string;
  colorTo: string;
  left: string;
  top: string;
  animationDelay?: string;
  animationDuration?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export const FloatingOrb = ({
  size,
  colorFrom,
  colorTo,
  left,
  top,
  animationDelay = '0s',
  animationDuration = '6s',
  blur = 'sm'
}: FloatingOrbProps) => {
  return (
    <span
      className={`absolute ${size} bg-gradient-to-r from-${colorFrom} to-${colorTo} rounded-full animate-float blur-${blur} block`}
      style={{
        left,
        top,
        animationDelay,
        animationDuration
      }}
    />
  );
};
