import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <Link href={"#home"} className={"text-textPrimary text-3xl font-bold"}>
        <span className={"text-accent"}>R</span>
        utger
      </Link>

      <nav className="flex gap-x-7">
        <Link href={"#about"} className={"text-textPrimary text-xl"}>
          About me
        </Link>
        <Link href={"#projects"} className={"text-textPrimary text-xl"}>
          My work
        </Link>
        <Link href={"#contact"} className={"text-textPrimary text-xl"}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
