import AnimatedBackground from "../components/AnimatedBackground";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Home() {
    return (
        <AnimatedBackground>
            <div>
                <main className="container px-4 sm:px-10 md:px-20 lg:px-40">
                    <div className="min-h-screen grid content-center">
                        <FadeInWhenVisible>
                            <div>
                                <span className="tracking-widest">Hi, my name is </span>
                                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold">David Gole.</h1>
                                <h2 className="text-3xl sm:text-5xl md:text-6xl opacity-35">I build things for computers.</h2>
                                <AnimatedButton>Get in touch</AnimatedButton>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {/* About Me */}
                        <FadeInWhenVisible>
                            <div className="mt-20">
                                <h1 className="text-4xl sm:text-5xl font-bold">About Me.</h1>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    I'm a passionate developer with experience in web technologies, always eager to learn
                                    and explore new challenges. My focus is on creating clean, efficient, and user-friendly
                                    applications.
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible>
                            <div className="relative w-full sm:w-64 h-64 mt-20 mx-auto">
                                <Image src="/me.jpg" alt="My profile" layout="fill" objectFit="cover"/>
                            </div>
                        </FadeInWhenVisible>

                        {/* Work Experience */}
                        <FadeInWhenVisible>
                            <div className="col-span-1 sm:col-span-2 mt-20">
                                <h1 className="text-4xl sm:text-5xl font-bold">Where I've Worked.</h1>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    Over the years, I've worked with various companies and projects, gaining experience in
                                    frontend and backend development. I've collaborated with teams to build scalable and
                                    performant applications.
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        {/* Projects */}
                        <FadeInWhenVisible>
                            <div className="col-span-1 sm:col-span-2 mt-20">
                                <h1 className="text-4xl sm:text-5xl font-bold">My Projects.</h1>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    Here are some of the projects I've worked on. They range from web applications to
                                    open-source contributions. Each project has helped me improve my skills and solve
                                    unique challenges.
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        {/* Contact */}
                        <FadeInWhenVisible>
                            <div className="mt-20">
                                <h1 className="text-4xl sm:text-5xl font-bold">Get in touch.</h1>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    Feel free to reach out to me for collaborations, freelance work, or just to say hi! I'm
                                    always open to discussing new ideas and opportunities.
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                </main>
                <footer className="m-10 sm:m-20 text-center">
                    <ThemeSwitcher/>
                    <p className="opacity-35 mt-10">Designed & Built by David Gole</p>
                </footer>
            </div>
        </AnimatedBackground>
    );
}
