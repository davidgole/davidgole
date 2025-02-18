import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div>
              <span className={"tracking-widest"}>Hi, my name is</span>
              <h1 className={"text-8xl"}>David Gole.</h1>
              <h2 className={"text-6xl opacity-35"}>I build things for computers.</h2>
              <button>Get in touch</button>
          </div>
      </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <p>Footer spletne strani. Vse pravice pridrzane.</p>
      </footer>
    </div>
  );
}
