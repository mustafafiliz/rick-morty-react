import { useEffect, useState } from "react";
import { ICharacter } from "../interfaces/characters/characters.interface";
import { getCharacterById } from "../services/characters/characters.service";
import Button from "../components/ui/Button";
import { formatDate } from "../utils/date";
import { Helmet } from "react-helmet-async";

const CharacterDetailSkeleton = () => {
  return (
    <div className="lg:flex mt-4">
      <div className="w-full flex mx-auto items-center justify-center aspect-[549/422] max-w-[549px] bg-gray-300 rounded">
        <svg
          className="w-20 h-20 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-6"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>
    </div>
  );
};

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

  if (loading) return <CharacterDetailSkeleton />;

  return (
    <>
      <Helmet>
        <title>{character?.name}</title>
      </Helmet>
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
                <span> {character?.origin.name}</span>
              </li>
              <li>
                <strong>Location Name:</strong>
                <span> {character?.location.name}</span>
              </li>
              <li>
                <strong>Created At:</strong>
                <span> {formatDate(character?.created as Date)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
