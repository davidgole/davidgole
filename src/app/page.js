import AnimatedBackground from "../components/AnimatedBackground";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AnimatedButton from "@/components/AnimatedButton";

export default function Home() {
  return (
      <AnimatedBackground>
          <div
              className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                  <div className="">
                      <span className="tracking-widest">Hi, my name is </span>
                      <h1 className="text-8xl font-bold">David Gole.</h1>
                      <h2 className="text-6xl opacity-35">I build things for computers.</h2>
                      <AnimatedButton>Get in touch</AnimatedButton>
                  </div>

              </main>
              <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                  <p>Footer spletne strani. Vse pravice pridrzane.</p>
                  <ThemeSwitcher />
              </footer>
          </div>
      </AnimatedBackground>

  );
}
