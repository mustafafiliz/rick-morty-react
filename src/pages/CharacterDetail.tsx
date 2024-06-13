import { useEffect, useState } from "react";
import { ICharacter } from "../interfaces/characters/characters.interface";
import { getCharacterById } from "../services/characters/characters.service";
import Button from "../components/ui/Button";
import { formatDate } from "../utils/date";

const CharacterDetail = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCharacterById(
          location.pathname.split("/").pop() || ""
        );
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    };
    getData();
  }, []);

  if (!loading && character === null) {
    return (
      <h1 className="text-center text-2xl font-medium mt-10">
        Character not found.
      </h1>
    );
  }

  if (loading) return <>Loading...</>;

  return (
    <div className="pt-4">
      <Button name="Back" onClick={() => history.back()} />
      <div className="pt-4 grid grid-cols-2 gap-4">
        <img
          src={character?.image}
          alt={character?.name}
          width="100%"
          height="100%"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{character?.name}</h1>
          <ul className="flex flex-col gap-2 mt-4 text-gray-800">
            <li>
              <strong>Type:</strong> <span>{character?.type || "-"}</span>
            </li>
            <li>
              <strong>Status:</strong> <span>{character?.status}</span>
            </li>
            <li>
              <strong>Species:</strong> <span>{character?.species}</span>
            </li>
            <li>
              <strong>Gender:</strong> <span>{character?.gender}</span>
            </li>
            <li>
              <strong>Origin Name:</strong>{" "}
              <span>{character?.origin.name}</span>
            </li>
            <li>
              <strong>Location Name:</strong>
              <span>{character?.location.name}</span>
            </li>
            <li>
              <strong>Created At:</strong>
              <span> {formatDate(character?.created as Date)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
