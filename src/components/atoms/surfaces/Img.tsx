import Image, { StaticImageData } from 'next/image';

interface ImgProps {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  lazy?: boolean;
  className?: string;
}

export const Img: React.FC<ImgProps> = (props) => {
  const { src, alt, priority, lazy, className } = props;
  return (
    <Image
      src={src}
      alt={alt}
      quality={100}
      fill
      priority={priority ? true : false}
      loading={lazy ? 'lazy' : undefined}
      style={{ objectFit: 'cover', backgroundColor: 'red' }}
      className={className}
    />
  );
};

//! how to style parent component
// style={{ position: 'relative', width: '100%', maxWidth: '1000px', aspectRatio: '1/1' }}
