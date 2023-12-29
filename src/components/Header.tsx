"use client";

import React from "react";
import LanguageIcon from "./icons/LanguageIcon";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function Header() {
  const scrollAnimation = "easeInOutCubic";
  const scrollDuration = 500;

  function changeLanguage() {
    alert("To be implemented"); // TODO Implement language change
  }

  return (
    <header className="fixed left-0 top-0 flex h-20 w-screen items-center justify-between bg-secondary px-spacing transition-all duration-500 md:bg-transparent md:backdrop-blur">
      <ScrollLink
        href={"#home"}
        to={"home"}
        className={"cursor-pointer text-3xl font-bold text-textPrimary"}
        smooth={scrollAnimation}
        duration={scrollDuration}
      >
        <span className={"text-accent"}>R</span>utger
      </ScrollLink>

      <nav className="flex gap-x-7">
        <ScrollLink
          href={"#about"}
          to={"about"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          smooth={scrollAnimation}
          duration={scrollDuration}
        >
          <p>About me</p>
          <span
            className={
              "header-underline group block h-[3px] w-full translate-x-[-101%] cursor-pointer rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"
            }
          ></span>
        </ScrollLink>
        <ScrollLink
          href={"#projects"}
          to={"projects"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          smooth={scrollAnimation}
          duration={scrollDuration}
        >
          <p> My work</p>
          <span
            className={
              "header-underline group block h-[3px] w-full translate-x-[-101%] cursor-pointer rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"
            }
          ></span>
        </ScrollLink>
        <ScrollLink
          href={"#contact"}
          to={"contact"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          smooth={scrollAnimation}
          duration={scrollDuration}
        >
          <p>Contact</p>
          <span className="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
        </ScrollLink>
        <Link
          href={"/"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          onClick={changeLanguage}
        >
          <div className={"flex items-center"}>
            <LanguageIcon className={" h-5 text-textPrimary"} />
            <p className={"ml-2 "}>EN</p>
          </div>
          <span className="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
        </Link>
      </nav>
    </header>
  );
}
