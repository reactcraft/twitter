import Image from 'next/image';
import type AvatarProps from './AvatarProps';

const Avatar = ({ src, alt }: AvatarProps) => (
  <Image
    className="h-12 w-12 rounded-full"
    src={src}
    alt={alt}
    width={48}
    height={48}
  />
);

export default Avatar;
