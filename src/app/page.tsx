"use client";
import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('./components/Map'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start">
        <div className='intro text-center sm:text-left'>
          <h1 className="text-8xl font-extralight">WORLD CUP 2026</h1>
          <h3 className="text-2xl font-extralight text-center w-full uppercase">Canadá - México - USA</h3>
          <h2 className="text-5xl font-extralight text-center w-full uppercase">11 JUN - 19 JUL</h2>
        </div>
        <Map />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
