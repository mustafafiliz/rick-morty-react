import { Link } from "react-router-dom";
import { CharacterIcon, HomeIcon } from "../icons";

const Aside = () => {
  const navs = [
    {
      name: "Anasayfa",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Characters",
      path: "/characters",
      icon: <CharacterIcon />,
    },
  ];

  return (
    <div className="w-[250px] h-screen text-gray-800 pl-2 p-4 flex flex-col justify-between border-r-2 border-gray-200">
      <div>
        <h2 className="text-lg font-medium pl-1">Rick and Morty API</h2>
        <nav className="mt-4">
          <ul className="flex flex-col gap-5">
            {navs.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="relative py-2 pl-4 flex gap-2 text-sm"
                    to={item.path}
                  >
                    {item.icon}
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="absolute top-0 bottom-0 left-1 h-full w-1 bg-blue-500" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <p className="font-medium text-sm">Rick and Morty © Jengal Software</p>
    </div>
  );
};

export default Aside;
