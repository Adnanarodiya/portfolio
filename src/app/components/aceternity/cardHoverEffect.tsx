'use client';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
    type: string;
    use: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className='relative group block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-neutral-200/[0.8] block rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} />
            <div className='p-4'>
              <CardTitle>{item.title}</CardTitle>
              <div className='flex gap-3 my-2'>
                {item.use.map((i) => (
                  <CardTag key={i} src={i} />
                ))}
              </div>
              <CardDescription>{item.description}</CardDescription>
              {item.type === 'Paused' && (
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 mb-4 bg-red-500 bg-opacity-50 text-white p-2 text-center backdrop-blur-md transition-opacity duration-500',
                    hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  Project paused due to Supabase limitation.
                </div>
              )}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full  overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className='relative z-50'>
        <div className=''>{children}</div>
      </div>
    </div>
  );
};
export const CardImage = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <h4
      className={cn(
        'text-zinc-100 font-bold tracking-wide object-contain h-44 overflow-hidden flex',
        className
      )}
    >
      <Image
        src={src}
        className=''
        alt='Adnan Arodiya'
        height={400}
        width={500}
      />
      {/* {children} */}
    </h4>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('text-zinc-100 font-bold tracking-wide ', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        ' text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardTag = ({ src }: { className?: string; src: string }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className=' w-6' src={src} alt='' />;
};
