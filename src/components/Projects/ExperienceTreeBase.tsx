import { ReactElement } from "react";

interface ExperienceTreeBaseProps {
  children: ReactElement | ReactElement[];
}

export default function ExperienceTreeBase({
  children,
}: Readonly<ExperienceTreeBaseProps>) {
  return (
    <div className={"flex"}>
      <div className="w-2 flex-shrink-0 rounded-full bg-secondary" />

      {Array.isArray(children) ? children.map((child) => child) : children}
    </div>
  );
}
