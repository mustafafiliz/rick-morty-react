import { useEffect, useState } from "react";
import { getCharacters } from "../services/characters/characters.service";
import { ICharacterResponse } from "../interfaces/characters/characters.interface";
import { CartoonCard } from "../components";

const Characters = () => {
  const [params, setParams] = useState({});
  const [data, setData] = useState<ICharacterResponse | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data: responseData } = await getCharacters(params);
        setData(responseData);
        console.log(responseData);
        setLoading(false);
      } catch (error) {
        return error;
      }
    };

    getData();
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.results.map((item) => {
        return <CartoonCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Characters;
