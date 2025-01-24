import { type Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";
import logoThera from "@/assets/projects/thera.png";
import logoBlogn from "@/assets/projects/blogn.png";
import logoZipRH from "@/assets/projects/ziprh.png";
import logoCliniFacil from "@/assets/projects/clinifacil.png";
import logoPortfolio from "@/assets/projects/portfolio.png";
import { routes } from "@/lib/routes";

import { ProjectCard } from "./project-card";

const strings = {
  title: "The mostly, dead ones",
  description:
    "I’ve worked on a fair amount of projects over the years, these are the ones I’m most proud of. Most of them I can openly share the code, as they are not live anymore, but the ones that are, I prefer to keep it closed.",
  projects: [
    {
      name: "Thera",
      description:
        "Thera is a platform that handle the link in bio, scheduling and payments for psychologists",
      linkLabel: "www.thera.rsvp",
    },
    {
      name: "This Website",
      description: "If you want to check out the code, feel free to do it",
      linkLabel: "github.com",
    },
    {
      name: "Blogn",
      description:
        "Blogn was a platform that helped users create a blog easily, with great writing experience.",
      linkLabel: "github.com",
    },
    {
      name: "ZipRH",
      description:
        "ZipRH was a platform that helped business owners track daily stuff, like employee clock ins and scheduling.",
      linkLabel: "github.com",
    },
    {
      name: "CliniFacil",
      description:
        "CliniFacil was a platform that helped doctors on the day to day tasks, such as handbook customization and writing prescriptions.",
      linkLabel: "github.com",
    },
  ],
};

const projects = [
  {
    link: {
      href: routes.thera,
    },
    logo: logoThera,
  },
  {
    link: {
      href: routes.portfolio,
    },
    logo: logoPortfolio,
  },
  {
    link: {
      href: routes.blogn,
    },
    logo: logoBlogn,
  },
  {
    link: {
      href: routes.ziprh,
    },
    logo: logoZipRH,
  },
  {
    link: {
      href: routes.clinifacil,
    },
    logo: logoCliniFacil,
  },
].map((project, idx) => ({
  ...project,
  ...strings.projects[idx],
  link: { ...project.link, label: strings.projects[idx].linkLabel },
}));

export const metadata: Metadata = {
  title: "Projects",
  description: strings.title,
};

const Projects = () => {
  return (
    <SimpleLayout title={strings.title} intro={strings.description}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            portfolioName={strings.projects[1].name}
          />
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default Projects;
