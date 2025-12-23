"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl px-6">
      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center w-full">
          <div className="w-[120px] h-[120px] mx-auto mb-2 sm:mb-4 rounded-full overflow-hidden text-focus-in transition-transform duration-300 hover:shadow-black">
            <Image
              src="/assets/img/profile.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold t1 sm:text-5xl md:text-5xl focus-in-expand">
            Andika Wisnumurti
          </h1>

          <div className="mt-2 sm:mt-4 flex justify-center gap-2 sm:gap-4 text-gray-500 dark:text-gray-400 text-focus-in">
            <p className="px-4 text-[14px] sm:text-base border border-gray-500 rounded-full hover:border-transparent hover:text-white hover:bg-neutral-900 dark:border-gray-400 dark:hover:border-transparent dark:hover:text-black dark:hover:bg-white glow-subtle transition-all duration-500">
              Frontend Developer
            </p>
            <p className="px-4 text-[14px] sm:text-base border border-gray-500 rounded-full hover:border-transparent hover:text-white hover:bg-neutral-900 dark:border-gray-400 dark:hover:border-transparent dark:hover:text-black dark:hover:bg-white glow-subtle transition-all duration-500">
              AI Engineer
            </p>
          </div>

          <p className="mt-2 sm:mt-4 t2 text-focus-in">
            I'm a passionate frontend developer with a strong foundation in web
            development. I'm always eager to learn new technologies and improve
            my skills.
          </p>

          <div className="mt-4 roll-in-blurred-bottom">
            <a
              href="mailto:wisnumurtiandika@gmail.com"
              className="p-2 font-semibold transition-all duration-500 underline  text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white inline-block glow-text animate__animated"
              onMouseEnter={(e) =>
                e.currentTarget.classList.add("animate__tada")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("animate__tada")
              }
            >
              Get in touch!
            </a>
          </div>

          <div className="flex items-center justify-center roll-in-blurred-bottom">
            <a
              href="#"
              className="scroll cursor-pointer"
              aria-label="Scroll down"
            ></a>
          </div>
        </div>
      </section>

      {/* BADGE */}
      <div className="mt-4 flex justify-center gap-6 text-focus-in">
        <p className="px-4 text-center mb-6">
          This website is not completely finished yet.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm t2 text-focus-in">
        <div className="flex justify-center gap-6 mb-6 items-center text-[22px] sm:text-2xl px-6 text-gray-400">
          <a
            href="https://github.com/andieewu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:scale-110 glow-text transition-all duration-300"
          >
            <i className="ri-github-fill"></i>
          </a>

          <a
            href="https://www.youtube.com/@andieewu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:scale-110 glow-text transition-all duration-300"
          >
            <i className="ri-youtube-fill"></i>
          </a>

          <a
            href="https://www.instagram.com/andieewu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:scale-110 glow-text transition-all duration-300"
          >
            <i className="ri-instagram-fill"></i>
          </a>

          <a
            href="https://discordapp.com/users/1229931778106593431"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:scale-110 glow-text transition-all duration-300"
          >
            <i className="ri-discord-fill"></i>
          </a>

          <a
            href="mailto:wisnumurtiandika@gmail.com"
            className="hover:text-black dark:hover:text-white hover:scale-110 glow-text transition-all duration-300"
          >
            <i className="ri-mail-fill"></i>
          </a>
        </div>
        © 2025 Andika Wisnumurti. All rights reserved.
      </footer>
    </div>
  );
}
