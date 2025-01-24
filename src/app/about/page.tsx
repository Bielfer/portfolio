import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import calisthenics from "@/assets/about/calisthenics.jpg";
import { routes } from "@/lib/routes";
import { professionalEmail } from "@/lib/constants";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const SocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => {
  return (
    <li className={cn(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
};

const strings = {
  socialLinks: {
    x: "Follow on X",
    instagram: "Follow on Instagram",
    github: "Follow on GitHub",
    linkedin: "Follow on LinkedIn",
  },
  title: "Software engineer by day, calisthenics enthusiast by night.",
  paragraphs: [
    'When I first heard about uber, in 2015, I got amazed. People now could ask a "cab" from anyone, anywhere, at anytime through their mobile phones. That moment I was decided to create my own app. At that moment I had never heard about programming before, but I was decided to have my own app.',
    "Fast forward a few years, I decided to pursue my dream to build an app, by enrolling in Electrical Engineering at the University of São Paulo, the best college in Brazil. The first time I was tasked to build a program in C, oh boy, it amazed me, and I was sure what I was gonna do for a living.",
    "After deciding what career I was gonna pursue, there was only one more thing that I had to fix, my health. At the beginning of 2023 after being sick for over a month, and a series of misdiagnoses later, a discovery was made, Crohn's disease. Without getting into the medical jargon, this disease basically restricts my ability to consume junk food, which I used to eat, a lot.",
    "After 2 weeks in hospital and a month of resting, I had to change my life. Since June 2023 I've been working out every day, besides sunday (no rest, no growth). 30 kgs, or 67 lbs, later, I can confidently say I'm living in my best self, as a healthy programmer.",
  ],
};

export const metadata: Metadata = {
  title: "About",
  description: strings.title,
};

const About = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={calisthenics}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {strings.title}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {strings.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={routes.x} icon={XIcon}>
              {strings.socialLinks.x}
            </SocialLink>
            <SocialLink
              href={routes.instagram}
              icon={InstagramIcon}
              className="mt-4"
            >
              {strings.socialLinks.instagram}
            </SocialLink>
            <SocialLink href={routes.github} icon={GitHubIcon} className="mt-4">
              {strings.socialLinks.github}
            </SocialLink>
            <SocialLink
              href={routes.linkedin}
              icon={LinkedInIcon}
              className="mt-4"
            >
              {strings.socialLinks.linkedin}
            </SocialLink>
            <SocialLink
              href={`mailto:${professionalEmail}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {professionalEmail}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
