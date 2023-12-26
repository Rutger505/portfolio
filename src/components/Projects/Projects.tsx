import AutoclickerImage from "../../../public/useful-autoclicker-3.0-previeuw.webp";
import TravelAgencyImage from "../../../public/travel-agency.webp";
import NoTimeToDieImage from "../../../public/no-time-to-die.webp";
import ProjectCard from "@/components/Projects/ProjectCard";
import ExperienceTreeBase from "@/components/Projects/ExperienceTreeBase";
import ExperienceTime from "@/components/Projects/ExperienceTime";

export default function Projects() {
  return (
    <section>
      <h2 className="text-5xl font-bold text-textPrimary">What can i do?</h2>
      <p className="mt-7 max-w-lg text-textSecondary">
        I enjoy working with Java, C#, and web development (HTML, CSS,
        JavaScript, PHP, SQL). I have collaborated on projects, improving
        teamwork and communication skills. I use Git/GitHub for version control
        and Scrum/Trello for project management. Here are some notable projects
        showcasing my skills.
      </p>
      <h3 className="mt-10 text-3xl  text-textPrimary">Projects</h3>
      <div className="mt-7  flex flex-col items-start gap-y-8">
        <ProjectCard
          title={"Useful-Autoclicker"}
          description={
            "A GUI project in development. Originally created in Java, it is now being rewritten in C#. this Autoclicker tool is a project that I've been working on for the past half year."
          }
          image={AutoclickerImage}
          link={"https://github.com/Rutger505/Useful-Autoclicker"}
        />
        <ProjectCard
          title={"Travel Agency"}
          description={
            "A project utilizing HTML, CSS, Tailwind CSS, PHP, MySQL, and API integration. I collaborated with another developer for three months to develop this travel agency website."
          }
          image={TravelAgencyImage}
          link={"https://github.com/Rutger505/Reisbureau"}
        />
        <ProjectCard
          title={"No Time To Die\n"}
          description={
            "A game jam project, this is a round-based survival game created in just 16 hours using Gamemaker. I collaborated with a team of 5 members to deliver this game."
          }
          image={NoTimeToDieImage}
          link={"https://github.com/Rutger505/Gamejam"}
        />
      </div>
      <h3 className="mt-10 text-3xl  text-textPrimary">Experiences</h3>
      <ExperienceTreeBase>
        <ExperienceTime />
      </ExperienceTreeBase>
    </section>
  );
}
