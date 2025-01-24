import Image, { type ImageProps } from "next/image";

import melviLogo from "@/assets/companies/melvi.jpg";
import nsxLogo from "@/assets/companies/nsx.jpg";
import semantixLogo from "@/assets/companies/semantix.jpg";
import wabafoodLogo from "@/assets/companies/wabafood.jpg";
import { ArrowDownIcon, BriefcaseIcon } from "@/components/icons";
import { Button } from "@/components/button";
import { resumeDownloadLink } from "@/lib/constants";

const strings = {
  roles: [
    {
      company: "Melvi (Closed)",
      title: "Full Stack Developer",
      start: "2024",
      end: "2024",
    },
    {
      company: "NSX",
      title: "Full Stack Developer",
      start: "2022",
      end: "2024",
    },
    {
      company: "Semantix",
      title: "Full Stack Developer",
      start: "2021",
      end: "2022",
    },
    {
      company: "Wabafood",
      title: "Full Stack Developer",
      start: "2021",
      end: "2021",
    },
  ],
  work: "Work",
  downloadCV: "Download CV",
  role: "Role",
  company: "Company",
  date: "Date",
  until: "until",
} as const;

const resume: Array<RoleType> = [
  { ...strings.roles[0], logo: melviLogo },
  { ...strings.roles[1], logo: nsxLogo },
  { ...strings.roles[2], logo: semantixLogo },
  { ...strings.roles[3], logo: wabafoodLogo },
];

export const Resume = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{strings.work}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href={resumeDownloadLink}
        prefetch={false}
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        {strings.downloadCV}
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
};

const Role = ({ role }: { role: RoleType }) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="size-7 rounded-full object-cover object-center"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">{strings.company}</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">{strings.role}</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">{strings.date}</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${role.start} ${strings.until} ${role.end}`}
        >
          <time dateTime={role.start}>{role.start}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={role.end}>{role.end}</time>
        </dd>
      </dl>
    </li>
  );
};

type RoleType = {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string;
  end: string;
};
