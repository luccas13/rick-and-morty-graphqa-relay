import { List, ListItem, ListItemTitle } from "@/components";
import { Link } from "react-router";

function NavMenuItems() {
  const items = [
    { href: "/", title: "Home" },
    { href: "/characters", title: "Characters" },
    { href: "/locations", title: "Locations" },
    { href: "/episodes", title: "Episodes" },
  ];

  return items.map((item) => {
    return (
      <ListItem key={item.href} className="hover:cursor-pointer">
        <Link to={item.href}>
          <ListItemTitle>{item.title}</ListItemTitle>
        </Link>
      </ListItem>
    );
  });
}

export function NavMenu() {
  return (
    <div className="hidden sm:block">
      <nav>
        <List direction="horizontal" className="w-full justify-center">
          <NavMenuItems />
        </List>
      </nav>
    </div>
  );
}
