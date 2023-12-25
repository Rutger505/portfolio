import Link from "next/link";
import ArrowDownIcon from "@/components/icons/arrowDownIcon";

export default function LandingPage() {
  return (
    <section
      id={"home"}
      className={"flex min-h-screen flex-col items-center justify-between"}
    >
      <div></div>

      <div>
        <h2 className={"text-center text-4xl text-textPrimary"}>
          &lt;/&gt; Software-dev
        </h2>
        <h1
          className={
            "mb-10 max-w-2xl text-center text-6xl font-bold text-textPrimary"
          }
        >
          Hi, I&apos;m <span className={"text-accent"}>Rutger</span> from the
          Netherlands
        </h1>
      </div>

      <Link href={"#about-me"} className={"mb-6"}>
        <ArrowDownIcon className={"h-8 animate-bounce text-accent"} />
      </Link>
    </section>
  );
}
