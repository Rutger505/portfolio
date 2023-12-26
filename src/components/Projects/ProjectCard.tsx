import Link from "next/link";
import AnimatedButton from "@/components/AnimatedButton";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Readonly<ProjectCardProps>) {
  return (
    <div className={"inline-flex flex-wrap gap-6 rounded-lg bg-secondary p-12"}>
      <div className={"flex max-w-md flex-col"}>
        <h4 className={"text-2xl text-textPrimary"}>{title}</h4>
        <p className={"mt-5 text-textSecondary"}>{description}</p>

        <div className={"flex-1"} />

        <Link href={link} className={"mt-5"} target={"_blank"}>
          <AnimatedButton text={"See on GitHub"} />
        </Link>
      </div>
      <Image className={"h-80 w-fit"} src={image} alt={"Image of {title}"} />
    </div>
  );
}
