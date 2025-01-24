import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";
import photo from "@/assets/square-photo.jpg";
import { cn } from "@/lib/utils";

const strings = {
  home: "Home",
};

export const AvatarContainer = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10",
      )}
      {...props}
    />
  );
};

export const Avatar = ({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  large?: boolean;
}) => {
  return (
    <Link
      href={routes.home}
      aria-label={strings.home}
      className={cn(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={photo}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={cn(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9",
        )}
        priority
      />
    </Link>
  );
};
