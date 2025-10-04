import Image from 'next/image';

interface GraphQLIconProps {
  name: string;
}

export default function GraphQLIcon({ name }: GraphQLIconProps) {
  return (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
      alt={`${name} logo`}
      width={32}
      height={32}
      className="object-contain rounded"
    />
  );
}
