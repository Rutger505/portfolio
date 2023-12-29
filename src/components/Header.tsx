"use client";

import React from "react";
import LanguageIcon from "./icons/LanguageIcon";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function Header() {
  const scrollAnimation = "easeInOutCubic";
  const scrollDuration = 700;
  const hideUnderlineClass = "w-0";
  const showUnderlineClass = "w-full";
  const hoverUnderlineClass = "group-hover:w-1/2";

  function changeLanguage() {
    alert("To be implemented"); // TODO Implement language change
  }

  function hideUnderlines(underlines: NodeListOf<Element>) {
    underlines.forEach((underline) => {
      underline.classList.add(hideUnderlineClass);
      underline.classList.add(hoverUnderlineClass);
      underline.classList.remove(showUnderlineClass);
    });
  }

  function showUnderline(underline: Element) {
    underline.classList.add(showUnderlineClass);
    underline.classList.remove(hoverUnderlineClass);
    underline.classList.remove(hideUnderlineClass);
  }

  function getCurrentSectionIndex(
    sections: HTMLElement[],
    scrollPosition: number,
  ): number {
    const centerOfScreen = scrollPosition + window.innerHeight / 2;

    return sections.findIndex((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      return centerOfScreen >= sectionTop && centerOfScreen <= sectionBottom;
    });
  }

  function handleLinkUnderline() {
    // search sections based on a with href starting with #
    const allSections = document.querySelectorAll("section");
    const sections = Array.from(allSections).slice(1); // remove landing page
    const underlines = document.querySelectorAll(".header-underline");
    const scrollPosition = window.scrollY;

    const currentSection = getCurrentSectionIndex(sections, scrollPosition);

    hideUnderlines(underlines);
    if (currentSection !== -1) {
      showUnderline(underlines[currentSection]);
    }
  }

  window.addEventListener("scroll", handleLinkUnderline);

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
              "header-underline block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
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
              "header-underline block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
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
          <span
            className={
              "header-underline block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
            }
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
              "header-underline block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
            }
          ></span>
        </Link>
      </nav>
    </header>
  );
}
