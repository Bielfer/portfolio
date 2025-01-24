import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/layout";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Gabriel Farias",
    default:
      "Gabriel Farias - Software developer, fitness enthusiast and board game lover",
  },
  description:
    "I'm Gabriel, a software developer with over 3 years of experience. I exercise daily and love playing board games whenever I have some free time.",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
