"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-center border border-gray-800/90 gap-3 rounded-full bg-black-900/10 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <ul className="flex flex-1 items-center justify-center gap-3">
            <li>
              <a
                className="flex items-center justify-center text-indigo-300 transition hover:text-indigo-400"
                href="https://github.com/cleytonlang"
                target="_blank"
                aria-label="Github"
              >
                <svg
                  className="h-10 w-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center text-indigo-300 transition hover:text-indigo-400"
                href="https://www.linkedin.com/in/cleytonbrasil/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27 0H5C2.2 0 0 2.2 0 5v22c0 2.8 2.2 5 5 5h22c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM9.4 27H5.3V12h4.1v15zm-2-17.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM27 27h-4.1v-7.5c0-1.8-.7-3-2.4-3-1.3 0-2.1.9-2.4 1.8-.1.3-.1.7-.1 1.1V27h-4.1V12h4.1v2.1c.6-.9 1.6-2.1 3.9-2.1 2.8 0 4.9 1.8 4.9 5.7V27z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
