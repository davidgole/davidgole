import AnimatedBackground from "../components/AnimatedBackground";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import SideNav from "@/components/SideNavigation";
import { motion, AnimatePresence } from "framer-motion";
import HyperLink from "@/components/HyperLink";
import AnimatedImage from "@/components/AnimatedImage";
import ProjectsSection from "@/components/StackProjects";

export default function Home() {
    return (
        <AnimatedBackground>
            <div>
                <main className="container px-4 sm:px-10 md:px-20 lg:px-40">
                    <div id={"hero"} className="min-h-screen grid content-center">
                        <FadeInWhenVisible>
                            <div>
                                <span className="tracking-widest">Hi, my name is </span>
                                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold">David Gole
                                    <span className={"text-[var(--primary)]"}>.</span>
                                </h1>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl opacity-35">I build things for computers.</h2>
                                <AnimatedButton>Get in touch</AnimatedButton>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <SideNav />
                        {/* About Me */}
                        <FadeInWhenVisible>
                            <div id="about" className="min-h-screen content-center">
                                <h2 className="text-4xl sm:text-5xl font-bold">About Me<span
                                    className={"text-[var(--primary)]"}>.</span></h2>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    I'm a passionate developer with experience in web technologies, always eager to learn and explore new challenges. My focus is on creating clean, efficient, and user-friendly applications.
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible>
                            <div className={"min-h-screen content-center"}>
                                <AnimatedImage />
                            </div>
                        </FadeInWhenVisible>


                        {/*/!* Work Experience *!/*/}
                        {/*<FadeInWhenVisible>*/}
                        {/*    <div id="work" className="col-span-1 sm:col-span-2 mt-20 min-h-screen content-center">*/}
                        {/*        <h2 className="text-4xl sm:text-5xl font-bold">Where I've Worked<span*/}
                        {/*            className={"text-[var(--primary)]"}>.</span></h2>*/}
                        {/*        <p className="mt-4 text-base sm:text-lg opacity-35">*/}
                        {/*            I was first introduced to programming and computer science in technical high school, where I chose computer science as an elective subject. I further deepened my knowledge at the Faculty of Electrical Engineering, Computer Science, and Information Technology.*/}

                        {/*            I am currently in the final year of my Computer Science and Information Technologies university program in Maribor. Throughout my studies, I have gained valuable experience, including working in teams where we developed several projects. These experiences have strengthened my technical skills and my ability to collaborate effectively in group settings.*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</FadeInWhenVisible>*/}
                        {/*<FadeInWhenVisible>*/}
                        {/*    <div id="work" className="col-span-1 sm:col-span-2 mt-20 min-h-screen content-center">*/}
                        {/*        <p className="mt-4 text-base sm:text-lg opacity-35">*/}
                        {/*            Working on ...*/}
                        {/*            /!*Tukaj bodo prisli logotipi firm kjer sem delal. Lisca, Bartog, Rondo, Skavti.*!/*/}

                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</FadeInWhenVisible>*/}

                        {/* Projects */}
                        <FadeInWhenVisible>
                            <div id="work" className="col-span-1 sm:col-span-2 mt-20 min-h-screen content-center">
                                <ProjectsSection />
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <div id="projects" className="col-span-1 sm:col-span-2 mt-20 min-h-screen content-center">
                                <h2 className="text-4xl sm:text-5xl font-bold">My Projects<span
                                    className={"text-[var(--primary)]"}>.</span></h2>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    Below are some of the projects I have worked on. As part of my university coursework, I participated in numerous group projects, where I learned how to work efficiently with teammates and use collaboration tools such as GitHub and Jira.
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        {/* Contact */}
                        <FadeInWhenVisible>
                            <div id="contact" className="mt-20 min-h-screen content-center">
                                <h2 className="text-4xl sm:text-5xl font-bold">Get in touch<span
                                    className={"text-[var(--primary)]"}>.</span></h2>
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    Feel free to reach out to me for collaborations, freelance work, or just to say hi!
                                    I'm
                                    always open to discussing new ideas and opportunities.
                                </p>
                                <p className="mt-4 text-base sm:text-lg"><HyperLink
                                    href={"https://www.facebook.com/david.gole.10"}>facebook</HyperLink></p>
                                <p className="mt-4 text-base sm:text-lg"><HyperLink
                                    href={"https://www.instagram.com/gole_david/"}>instagram</HyperLink></p>
                                <p className="mt-4 text-base sm:text-lg"><HyperLink
                                    href={"https://github.com/davidgole"}>github</HyperLink></p>
                                <p className="mt-4 text-base sm:text-lg"><HyperLink
                                    href={"https://www.linkedin.com/"}>linkedin</HyperLink></p>
                                <p className="mt-4 text-base sm:text-lg"><HyperLink
                                    href={"mailto:david.gole@outlook.com"}>david.gole@outlook.com</HyperLink></p>

                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <div id="work" className="col-span-1 sm:col-span-2 mt-20 min-h-screen content-center">
                                <p className="mt-4 text-base sm:text-lg opacity-35">
                                    Working on ...
                                {/*Obrazec za kontaktiranje.*/}
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                </main>
                <footer className="m-10 sm:m-20 text-center">
                    <p className="opacity-35 mt-10">Designed & Built by David Gole</p>
                    <div className="mt-4 flex justify-center">
                        {/* Light theme logo */}
                        <Image
                            src="/logo_black.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="opacity-30 dark:hidden"
                        />
                        {/* Dark theme logo */}
                        <Image
                            src="/logo_white.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="opacity-30 hidden dark:block"
                        />
                    </div>
                </footer>


            </div>
        </AnimatedBackground>
    );
}
