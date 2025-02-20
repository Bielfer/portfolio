import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { routes } from "@/lib/routes";

const strings = {
  code: "404",
  title: "Page not found",
  description: "Sorry, we couldn’t find the page you’re looking for.",
  button: "Go back home",
};

const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          {strings.code}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {strings.title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {strings.description}
        </p>
        <Button href={routes.home} variant="secondary" className="mt-4">
          {strings.button}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
