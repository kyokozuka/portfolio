import Image from 'next/image';

interface AWSIconProps {
  name: string;
}

export default function AWSIcon({ name }: AWSIconProps) {
  return (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      alt={`${name} logo`}
      width={32}
      height={32}
      className="object-contain rounded"
    />
  );
}
