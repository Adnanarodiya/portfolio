import { ChevronsDown } from 'lucide-react';
import Link from 'next/link';
import ScrollButton from './scrollButton';

export default function Hero() {
  return (
    <div className='w-11/12 p-8 top-0 flex mx-auto h-[90vh] flex-col justify-center'>
      <div>
        <h1 className='text-2xl font-bold md:text-4xl'>
          Hello,I am <span className='text-blue-500'> Adnan Arodiya</span>
        </h1>
        <h1 className='text-4xl md:text-6xl font-bold mt-4 md:mt-8'>
          I build frontend stuffs.
        </h1>
        <h4 className=' mt-4 md:mt-8 md:text-2xl'>
          I'm a frontend developer, who loves to craft things with frontend
          skills, based in India/Gujarat.
        </h4>

        <div>
          <Link href={'/resume.pdf'} target='_blank'>
            <button className='inline-flex mt-8 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
              Resume
            </button>
          </Link>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}