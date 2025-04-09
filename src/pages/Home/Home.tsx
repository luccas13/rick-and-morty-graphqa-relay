import { Card, CardTitle } from "@/components";
import { useNavigate } from "react-router";

const links = [
  { href: "/characters", title: "Characters" },
  { href: "/episodes", title: "Episodes" },
  { href: "/locations", title: "Locations" },
];

const APP_TITLE = "Rick & Morty Wiki";

export const Home = () => {
  const navigate = useNavigate();

  const onClickCardHandler = (href: string) => {
    navigate(href);
  };

  return (
    <main className="flex flex-col gap-12 py-12">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-7xl font-black text-primary sm:text-8xl">
          {APP_TITLE}
        </h1>
        <p className="text-xl font-semibold text-muted-foreground sm:text-2xl">
          {APP_TITLE} is a web app built by using Vite, GraphQL & Relay Query.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {links.map((link) => {
          return (
            <Card
              key={link.title}
              onClick={() => onClickCardHandler(link.href)}
              className="hover:cursor-pointer"
            >
              <CardTitle className="text-xl">{link.title}</CardTitle>
            </Card>
          );
        })}
      </div>
    </main>
  );
};
