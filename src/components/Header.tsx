import React from "react";
import ScrollLink from "@/components/ScrollLink";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import UnderlineScrollLink from "@/components/UnderlineScrollLink";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");

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
        <UnderlineScrollLink
          href={"#about"}
          to={"about"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>{t("about")}</p>
        </UnderlineScrollLink>
        <UnderlineScrollLink
          href={"#projects"}
          to={"projects"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>{t("projects")}</p>
        </UnderlineScrollLink>
        <UnderlineScrollLink
          href={"#contact"}
          to={"contact"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>{t("contact")}</p>
        </UnderlineScrollLink>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
