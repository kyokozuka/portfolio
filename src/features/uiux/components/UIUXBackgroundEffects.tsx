import { Icon } from '@iconify/react';
import { FloatingOrb } from '@/components/atoms/FloatingOrb';

interface CreativeElement {
  size: string;
  color: string;
  left: string;
  top: string;
  delay: string;
}

interface DesignIcon {
  icon: string;
  color: string;
  size: string;
  left: string;
  top: string;
  delay: string;
}

interface UIUXBackgroundEffectsProps {
  creativeElements: CreativeElement[];
  designIcons: DesignIcon[];
}

export const UIUXBackgroundEffects = ({ creativeElements, designIcons }: UIUXBackgroundEffectsProps) => {
  return (
    <section className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient background */}
      <span className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30 animate-pulse block" />

      {/* Floating creative elements */}
      {creativeElements.map((element, index) => (
        <FloatingOrb
          key={`creative-${index}`}
          size={element.size}
          colorFrom={element.color.split(' ')[0].replace('bg-gradient-to-r', '').replace('from-', '')}
          colorTo={element.color.split(' ')[1]?.replace('to-', '') || element.color.split(' ')[0].replace('bg-gradient-to-r', '').replace('from-', '')}
          left={element.left}
          top={element.top}
          animationDelay={element.delay}
          animationDuration={`${6 + Math.random() * 4}s`}
        />
      ))}

      {/* Design icons with colors */}
      {designIcons.map((icon, index) => (
        <span
          key={`icon-${index}`}
          className={`absolute ${icon.color} ${icon.size} animate-pulse opacity-60 block`}
          style={{
            left: icon.left,
            top: icon.top,
            animationDelay: icon.delay,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        >
          <Icon icon={icon.icon} />
        </span>
      ))}

      {/* Large gradient orbs */}
      <span className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse block" />
      <span className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse block" style={{animationDelay: '3s'}} />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse block" style={{animationDelay: '1.5s'}} />
    </section>
  );
};

export default UIUXBackgroundEffects;
