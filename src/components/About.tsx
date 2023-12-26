import mePhoto from "../../public/me.webp";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[2500px] py-24 mdlg:py-32 too-big:m-auto"
    >
      <h2 className="text-5xl font-bold text-textPrimary">Who am I?</h2>
      <div className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-10 mdlg:flex-nowrap lg:gap-x-24">
        <div className="flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0 mdlg:flex-col mdlg:flex-nowrap">
          <Image
            className={"w-full max-w-[20rem] rounded-full sm:h-80 sm:w-80"}
            src={mePhoto}
            alt={"A picture of me"}
          />
        </div>
        <div className="mt-8 max-w-lg flex-shrink text-textSecondary delay-150 sm:min-w-[350px]">
          <p>
            My name is Rutger Pronk, and I am studying Software Development at
            ROC Nijmegen in the Netherlands. I am currently a second year
            student.
          </p>
          <p className="mt-7">
            I have a strong passion for programming and software development,
            with a dedicated focus on improving my skills in C#/C++ and Next.js.
            Additionally, I am learning Nest.js for back-end web development.
          </p>
        </div>
      </div>
    </section>
  );
}
