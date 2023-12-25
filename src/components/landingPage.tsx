import Link from "next/link";
import ArrowDownIcon from "@/components/icons/arrowDownIcon";

export default function LandingPage() {
  return (
    <section
      id={"home"}
      className={"flex min-h-screen flex-col items-center justify-center"}
    >
      <h2 className={"text-4xl text-textPrimary"}>&lt;/&gt; Software-dev</h2>
      <h1
        className={
          "mb-20 max-w-2xl text-center text-6xl font-bold text-textPrimary"
        }
      >
        Hi, I'm <span className={"text-accent"}>Rutger</span> from the
        Netherlands
      </h1>

      <Link href={"#about-me"} className={"justify-self-end"}>
        <ArrowDownIcon className={"h-8 animate-bounce text-accent"} />
      </Link>
    </section>
  );
}
