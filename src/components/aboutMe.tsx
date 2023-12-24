import mePhoto from "../../public/me.webp";
import Image from "next/image";
import GithubIcon from "@/components/icons/githubIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import MailIcon from "@/components/icons/mailIcon";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="mx-spacing mdlg:py-32 too-big:m-auto max-w-[2500px] py-24"
    >
      <h2 className="text-xl font-bold">Wie ben ik?</h2>
      <div className="mdlg:flex-nowrap mt-24 flex flex-wrap gap-x-12 gap-y-10 lg:gap-x-24">
        <div className="mdlg:flex-col mdlg:flex-nowrap flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0">
          <Image
            className={
              "w-full max-w-[20rem] rounded-full bg-secondary sm:h-80 sm:w-80"
            }
            src={mePhoto}
            alt={"A picture of me"}
          />

          <div className="aboutMe:flex-col mdlg:flex-row flex flex-row flex-wrap items-center gap-9">
            <a href="https://github.com/Rutger505" target="_blank">
              <GithubIcon className={"h-8 text-accent"} />
            </a>
            <a
              href="https://www.linkedin.com/in/rutger-pronk-585149273/"
              target="_blank"
            >
              <LinkedinIcon className={"h-8 text-accent"} />
            </a>
            <a href="#contact">
              <MailIcon className={"h-8 text-accent"} />
            </a>
          </div>
        </div>
        <div className="mt-8 max-w-[572px] flex-shrink delay-150 sm:min-w-[350px]">
          <p>
            Mijn naam is Rutger Pronk en ik studeer momenteel om een software
            developer te worden. Ik zit momenteel in mijn eerste studiejaar op
            het ROC Nijmegen.
          </p>
          <p className="mt-7">
            Ik heb een grote passie voor programmeren en softwareontwikkeling,
            met een specifieke focus op het uitbreiden van mijn kennis in Java
            en C#. Daarnaast leer ik ook zowel front-end als back-end voor
            websites.
          </p>
        </div>
      </div>
    </section>
  );
}
