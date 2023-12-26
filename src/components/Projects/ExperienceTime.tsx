import { ReactElement } from "react";

interface ExperienceTimeProps {
  time: string;
  present?: boolean;
  children: ReactElement | ReactElement[];
}

export default function ExperienceTime({
  time,
  present = false,
  children,
}: Readonly<ExperienceTimeProps>) {
  return (
    <div className={"flex gap-x-6"}>
      <div>
        <div className={`mt-[6px] h-4 w-4 rounded-full bg-accent`} />

        {present ? (
          <div
            className={`-mt-4 h-4 w-4 animate-ping rounded-full bg-accent`}
          />
        ) : (
          ""
        )}
      </div>

      <div>
        <h4
          className={`${
            present ? "!text-accent" : ""
          } text-xl text-textSecondary`}
        >
          {time} {present ? " - Present" : ""}
        </h4>
        <div className={"flex flex-col items-start gap-y-4 py-5"}>
          {Array.isArray(children) ? children.map((child) => child) : children}
        </div>
      </div>
    </div>
  );
}
