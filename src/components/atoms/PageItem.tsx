import Link from "next/link";
import { Icon } from '@iconify/react';
import { Typography } from "./Typography";

type ItemSize = 'sm' | 'md' | 'lg';

interface PageItemsProps {
  href: string;
  title: string;
  icon: string;
  size?: ItemSize;
}


export default function PageItems({ href, title, icon, size = 'lg' }: PageItemsProps) {
  return (
    <Link
      href={href}
      className={`${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'} font-medium transition-all hover:translate-x-2 duration-300 relative group cursor-pointer text-gray-300 hover:text-blue-400`}
      prefetch={true}
    >
      <Typography variant="span" className="relative z-10 flex items-center">
        <Icon icon={icon} className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
        {title}
      </Typography>
    </Link>
  )
}