export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start">
        <h1 className="text-8xl font-extralight">WORLD CUP 2026</h1>
        <h3 className="text-2xl font-extralight text-center w-full uppercase">Canada - Mexico - USA</h3>
        <h2 className="text-5xl font-extralight text-center w-full uppercase">11 JUN - 19 JUL</h2>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
