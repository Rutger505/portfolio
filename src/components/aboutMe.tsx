import mePhoto from "../../public/me.webp";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="mx-spacing max-w-[2500px] py-24 mdlg:py-32 too-big:m-auto"
    >
      <h2 className="text-5xl font-bold text-textPrimary">Wie ben ik?</h2>
      <div className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-10 mdlg:flex-nowrap lg:gap-x-24">
        <div className="flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0 mdlg:flex-col mdlg:flex-nowrap">
          <Image
            className={
              "w-full max-w-[20rem] rounded-full bg-secondary sm:h-80 sm:w-80"
            }
            src={mePhoto}
            alt={"A picture of me"}
          />
        </div>
        <div className="mt-8 max-w-[572px] flex-shrink text-textSecondary delay-150 sm:min-w-[350px]">
          <p>
            Mijn naam is Rutger Pronk en ik studeer Software Development. Ik zit
            momenteel in mijn tweede studiejaar op het ROC Nijmegen.
          </p>
          <p className="mt-7">
            Ik heb een grote passie voor programmeren en softwareontwikkeling,
            met een specifieke focus op het uitbreiden van mijn kennis C# en
            Next.js. Daarnaast leer ik ook Nest.js voor de backend.
          </p>
        </div>
      </div>
    </section>
  );
}
