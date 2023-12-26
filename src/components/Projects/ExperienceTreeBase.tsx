import { ReactElement } from "react";

interface ExperienceTreeBaseProps {
  children: ReactElement | ReactElement[];
}

export default function ExperienceTreeBase({
  children,
}: Readonly<ExperienceTreeBaseProps>) {
  return (
    <div className={"flex"}>
      <div className=" -mr-3 w-2 rounded-full bg-secondary" />
      <div className={"mt-1"}>
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </div>
  );
}
