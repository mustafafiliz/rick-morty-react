import { genderOptions, statusOptions } from "../../mocks/static";
import { ICharParams } from "../../services/characters/characters.service";
import { SearchIcon, TrashIcon } from "../icons";
import { Input } from "../ui";
import Button from "../ui/Button";
import SelectBox from "../ui/SelectBox";

type Props = {
  params: ICharParams;
  setParams: (params: ICharParams) => void;
  handleSubmit: (_params?: ICharParams) => Promise<unknown>;
};

const FilterContainer = ({ params, setParams, handleSubmit }: Props) => {
  const handleReset = () => {
    const initialParams = {
      name: "",
      type: "",
      status: "",
      gender: "",
    };
    setParams(initialParams);
    handleSubmit(initialParams);
  };
  return (
    <div className="sticky top-0 bg-white py-4 z-10">
      <form
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="py-3 px-4 bg-gray-100 md:flex gap-2 items-center border border-gray-300 rounded-lg"
      >
        <h3 className="mr-2 font-medium lg:flex hidden">Filter Characters</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 flex-1 gap-2">
          <div className="col-span-2">
            <Input
              value={params.name}
              onChange={(e) =>
                setParams({ ...params, name: e.target.value.trimStart() })
              }
              placeholder="Name"
            />
          </div>
          <div className="col-span-2">
            <Input
              value={params.type}
              onChange={(e) =>
                setParams({ ...params, type: e.target.value.trimStart() })
              }
              placeholder="Type"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <SelectBox
              onChange={(value: string) =>
                setParams({ ...params, status: value })
              }
              options={statusOptions}
              value={params.status}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <SelectBox
              onChange={(value: string) =>
                setParams({ ...params, gender: value })
              }
              options={genderOptions}
              value={params.gender}
            />
          </div>
        </div>
        <Button
          onClick={() => handleSubmit()}
          type="submit"
          className="justify-center w-full md:w-[110px] md:mt-0 mt-4"
          name="Search"
          icon={<SearchIcon />}
        />
        <Button
          onClick={handleReset}
          variant="danger"
          className="px-4 h-[38px] md:w-auto w-full md:mt-0 mt-4 lg:justify-normal justify-center"
          icon={<TrashIcon />}
        />
      </form>
    </div>
  );
};

export default FilterContainer;
