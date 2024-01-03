import LanguageIcon from "@/components/icons/LanguageIcon";
import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const otherLocale = locale == "en" ? "nl" : "en";

  return (
    <Link
      href={otherLocale}
      className={
        "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
      }
      scroll={false}
    >
      <div className={"flex items-center"}>
        <LanguageIcon className={" h-5 text-textPrimary"} />
        <p className={"ml-2 "}>{otherLocale.toUpperCase()}</p>
      </div>
      <span
        className={
          "block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
        }
      ></span>
    </Link>
  );
}
