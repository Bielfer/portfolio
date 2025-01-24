import logoPortfolio from "@/assets/projects/portfolio.png";
import { Container } from "@/components/container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";
import { routes } from "@/lib/routes";
import logoThera from "@/assets/projects/thera.png";
import { ProjectCard } from "../projects/project-card";
import { Button } from "@/components/button";

import { SocialLink } from "./social-link";
import { Photos } from "./photos";
import { Resume } from "./resume";

const strings = {
  title: "Software developer, fitness enthusiast and board game lover",
  description:
    "I'm Gabriel, a software developer with over 3 years of experience. I exercise daily and love playing board games whenever I have some free time. I also like to build a bunch of different projects on my spare time, which can be checked below, or in the projects tab.",
  socialLinksAria: {
    x: "Follow on X",
    instagram: "Follow on Instagram",
    github: "Follow on GitHub",
    linkedin: "Follow on LinkedIn",
  },
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
  ],
  seeMore: "See More",
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
].map((project, idx) => ({
  ...project,
  ...strings.projects[idx],
  link: { ...project.link, label: strings.projects[idx].linkLabel },
}));

const Home = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {strings.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {strings.description}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={routes.x}
              aria-label={strings.socialLinksAria.x}
              icon={XIcon}
            />
            <SocialLink
              href={routes.instagram}
              aria-label={strings.socialLinksAria.instagram}
              icon={InstagramIcon}
            />
            <SocialLink
              href={routes.github}
              aria-label={strings.socialLinksAria.github}
              icon={GitHubIcon}
            />
            <SocialLink
              href={routes.linkedin}
              aria-label={strings.socialLinksAria.linkedin}
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                portfolioName={strings.projects[1].name}
              />
            ))}
            <div className="flex justify-center">
              <Button
                className="rounded-full"
                variant="secondary"
                href={routes.projects}
              >
                {strings.seeMore}
              </Button>
            </div>
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
