"use client";

import React, { useEffect, useState } from "react";
import LanguageIcon from "./icons/LanguageIcon";
import Link from "next/link";
import ScrollLink from "@/components/ScrollLink";

export default function Header() {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(-1);

  function changeLanguage() {
    alert("To be implemented"); // TODO Implement language change
  }

  function handleLinkUnderline() {
    const sections = Array.from(document.querySelectorAll("section"));
    sections.shift(); // remove landing page
    const centerOfScreen = window.scrollY + window.innerHeight / 2;

    const currentSectionIndex = sections.findIndex((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      return centerOfScreen >= sectionTop && centerOfScreen <= sectionBottom;
    });

    setActiveSectionIndex(currentSectionIndex);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleLinkUnderline);

    return () => {
      window.removeEventListener("scroll", handleLinkUnderline);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 flex h-20 w-screen items-center justify-between bg-secondary px-spacing transition-all duration-500 md:bg-transparent md:backdrop-blur">
      <ScrollLink
        href={"#home"}
        to={"home"}
        className={"cursor-pointer text-3xl font-bold text-textPrimary"}
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
        >
          <p>About me</p>
          <span
            className={`${
              activeSectionIndex == 0 ? "w-full" : "w-0 group-hover:w-1/2"
            } block h-1 rounded-full bg-accent duration-300 ease-in-out `}
          ></span>
        </ScrollLink>
        <ScrollLink
          href={"#projects"}
          to={"projects"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p> My work</p>
          <span
            className={`${
              activeSectionIndex == 1 ? "w-full" : "w-0 group-hover:w-1/2"
            } block h-1 rounded-full bg-accent duration-300 ease-in-out`}
          ></span>
        </ScrollLink>
        <ScrollLink
          href={"#contact"}
          to={"contact"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>Contact</p>
          <span
            className={`${
              activeSectionIndex == 2 ? "w-full" : "w-0 group-hover:w-1/2"
            } block h-1 rounded-full bg-accent duration-300 ease-in-out`}
          ></span>
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
          <span
            className={
              "block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
            }
          ></span>
        </Link>
      </nav>
    </header>
  );
}
