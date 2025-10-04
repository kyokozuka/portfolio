interface FigmaPrototypeProps {
  src: string;
  title?: string;
  width?: string;
  height?: string;
}

export const FigmaPrototype = ({
  src,
  title = 'Figma Prototype',
  width = '800',
  height = '450'
}: FigmaPrototypeProps) => {
  return (
    <figure className="flex justify-center w-full animate-fadeIn delay-200">
      <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '1rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
        width={width}
        height={height}
        src={src}
        allowFullScreen
        title={title}
      />
    </figure>
  );
};
