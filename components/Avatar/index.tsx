import Image from 'next/image';
import type AvatarProps from './AvatarProps';

const Avatar = ({ src, alt }: AvatarProps) => (
  <Image
    className="h-10 w-10 rounded-full"
    src={src}
    alt={alt}
    width={40}
    height={40}
  />
);

export default Avatar;
