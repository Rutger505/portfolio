"use client";

import React from "react";
import { animateScroll } from "react-scroll";
import Link from "next/link";
import LanguageIcon from "./icons/LanguageIcon";

export default function Header() {
  function scrollSmooth(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href")!;
    const target = document.querySelector(href)!;
    const yTarget = target.getBoundingClientRect().top + window.scrollY;

    animateScroll.scrollTo(yTarget, {
      smooth: "easeInOutCubic",
      duration: 500,
    });
  }

  function changeLanguage() {
    alert("To be implemented");
  }

  return (
    <header className="fixed left-0 top-0 flex h-20 w-screen items-center justify-between bg-secondary px-spacing transition-all duration-500 md:bg-transparent md:backdrop-blur">
      <Link
        href={"#home"}
        className={"cursor-pointer text-3xl font-bold text-textPrimary"}
        onClick={scrollSmooth}
      >
        <span className={"text-accent"}>R</span>utger
      </Link>

      <nav className="flex gap-x-7">
        <Link
          href={"#about"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          onClick={scrollSmooth}
        >
          <p>About me</p>
          <span
            className={
              "header-underline group block h-[3px] w-full translate-x-[-101%] cursor-pointer rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"
            }
          ></span>
        </Link>
        <Link
          href={"#projects"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          onClick={scrollSmooth}
        >
          <p> My work</p>
          <span
            className={
              "header-underline group block h-[3px] w-full translate-x-[-101%] cursor-pointer rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"
            }
          ></span>
        </Link>
        <Link
          href={"#contact"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          onClick={scrollSmooth}
        >
          <p>Contact</p>
          <span className="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
        </Link>
        {/*  Make link for switch language*/}
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