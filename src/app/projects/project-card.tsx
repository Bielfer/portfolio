import Image from "next/image";

import { Card } from "@/components/card";
import { LinkIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  project: {
    name: string;
    description: string;
    link: { href: string; label: string };
    logo: any; // eslint-disable-line
  };
  portfolioName: string;
};

export const ProjectCard = ({ project, portfolioName }: Props) => {
  const isPortfolio = project.name === portfolioName;

  return (
    <Card as="li" key={project.name}>
      <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <div
          className={cn(
            "size-8 overflow-hidden rounded-full p-[4.7px]",
            isPortfolio && "p-0",
          )}
        >
          <Image
            src={project.logo}
            alt=""
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={project.link.href} target="_blank">
          {project.name}
        </Card.Link>
      </h2>
      <Card.Description>{project.description}</Card.Description>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">{project.link.label}</span>
      </p>
    </Card>
  );
};
