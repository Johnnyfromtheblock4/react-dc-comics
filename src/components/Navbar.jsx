const Navbar = () => {
  const links = [
    {
      id: 1,
      label: "CHARACTERS",
      href: "#",
      current: false,
    },
    {
      id: 2,
      label: "COMICS",
      href: "#",
      current: true,
    },
    {
      id: 3,
      label: "MOVIES",
      href: "#",
      current: false,
    },
    {
      id: 4,
      label: "TV",
      href: "#",
      current: false,
    },
    {
      id: 5,
      label: "GAMES",
      href: "#",
      current: false,
    },
    {
      id: 6,
      label: "COLLECTIBLES",
      href: "#",
      current: false,
    },
    {
      id: 7,
      label: "VIDEOS",
      href: "#",
      current: false,
    },
    {
      id: 8,
      label: "FANS",
      href: "#",
      current: false,
    },
    {
      id: 9,
      label: "NEWS",
      href: "#",
      current: false,
    },
    {
      id: 10,
      label: "SHOP",
      href: "#",
      current: false,
    },
  ];
  return (
    <div className="col-75">
      <ul className="menu">
        {links.map((link) => {
          // metodo deconstractor
          const { id, label, href, current } = link;
          return (
            <li key={id} className={current === true ? "active" : ""}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
