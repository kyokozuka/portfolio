import clsx from "clsx";

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'body' | 'label';
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({ variant = 'body', children, className }: TypographyProps) => {
  const style = {
    h1: 'text-5xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-3xl font-semibold',
    h3: 'text-2xl md:text-2xl font-semibold',
    h4: 'text-xl md:text-xl font-semibold',
    label: 'text-lg md:text-lg font-semibold',
    body: 'text-base md:text-base',
    p: 'text-sm md:text-sm',
    span: 'text-xs md:text-base',
  };
  return <p className={clsx(style[variant], className)}>{children}</p>;
};