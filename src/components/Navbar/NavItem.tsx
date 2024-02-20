import { useEffect } from "react";

interface Props {
  name: string;
  href?: string;
  transitionName?: string;
}

const NavItem = (Astro: any) => {
  const { href, transitionName, name } = Astro as Props;

  useEffect(() => {
    console.log("NavItem", href);
  }, [window]);

  return (
    <div className={"nav-link py-6 text-lg"}>
      <a
        href={href}
        {...(transitionName
          ? { ["transition:name"]: { transitionName } }
          : ({} as { [key: string]: any }))}
      >
        {name}
      </a>
    </div>
  );
};

export default NavItem;
