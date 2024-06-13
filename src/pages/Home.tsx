const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-medium text-center mt-10">Rick Morty App</h1>
      <ul className="text-xl font-medium mt-10">
        <li>API: {import.meta.env.VITE_API_URL}</li>
        <li className="mt-10">React</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>React Helmet (to create dynamic title)</li>
        <li className="mt-10">404 (not found page) included</li>
      </ul>
    </>
  );
};

export default Home;
