import Image from 'next/image';

interface BacklogIconProps {
  name: string;
}

export default function BacklogIcon({ name }: BacklogIconProps) {
  return (
    <Image
      src="https://backlog.com/ja/wp-content/themes/backlog/assets/images/common/logo.svg"
      alt={`${name} logo`}
      width={32}
      height={32}
      className="object-contain rounded"
    />
  );
}
