import { useEffect, useState } from "react";
import {
  ICharParams,
  getCharacters,
} from "../services/characters/characters.service";
import { ICharacterResponse } from "../interfaces/characters/characters.interface";
import {
  CharacterCard,
  CharacterCardSkeleton,
  FilterContainer,
  Pagination,
} from "../components";

const Characters = () => {
  const [params, setParams] = useState<ICharParams>({
    name: "",
    type: "",
    status: "",
    gender: "",
    page: 1,
  });
  const [data, setData] = useState<ICharacterResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = async (_params?: ICharParams) => {
    try {
      const { data: responseData } = await getCharacters(_params || params);
      setData(responseData);
      setLoading(false);
    } catch (error: any) {
      if (error?.response?.status === 404) {
        setData(null);
        setLoading(false);
      }
      return error;
    }
  };

  const handlePagination = async (page: number) => {
    const _params = { ...params, page };
    setParams(_params);
    await getData(_params);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <FilterContainer
        params={params}
        setParams={setParams}
        handleSubmit={getData}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => {
            return <CharacterCardSkeleton key={index} />;
          })
        ) : (
          <>
            {data?.results.map((item) => {
              return <CharacterCard key={item.id} item={item} />;
            })}
          </>
        )}
      </div>
      <div className="mt-6 mb-2 flex justify-center scale-125">
        <Pagination
          page={params.page}
          onPagination={handlePagination}
          totalPages={data?.info.pages || 1}
        />
      </div>
    </>
  );
};

export default Characters;
