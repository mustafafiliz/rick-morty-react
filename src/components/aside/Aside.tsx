import { Link, useNavigation } from "react-router-dom";

const Aside = () => {
  const { location } = useNavigation();

  const navs = [
    {
      name: "Anasayfa",
      path: "/",
    },
    {
      name: "Characters",
      path: "/characters",
    },
  ];

  return (
    <div className="w-[300px]">
      <h2>Rick and Morty API</h2>
      <nav>
        <ul>
          {navs.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
