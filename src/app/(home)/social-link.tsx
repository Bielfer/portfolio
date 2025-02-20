import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

export const SocialLink = ({
  icon: Icon,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <Link
      className="group -m-1 p-1"
      {...props}
      prefetch={false}
      target="_blank"
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};
