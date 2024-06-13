import { ICharParams } from "../../services/characters/characters.service";
import { SearchIcon, TrashIcon } from "../icons";
import { Input } from "../ui";
import Button from "../ui/Button";

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
      <div className="py-3 px-4 bg-gray-100 flex gap-2 items-center">
        <h3 className="mr-2 font-medium">Filter Characters</h3>
        <div className="grid grid-cols-6 flex-1 gap-2">
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
          <div className="col-span-1">
            <Input value="" onChange={() => {}} placeholder="Status" />
          </div>
          <div className="col-span-1">
            <Input value="" onChange={() => {}} placeholder="Gender" />
          </div>
        </div>
        <Button
          onClick={() => handleSubmit()}
          className="justify-center w-[110px]"
          name="Search"
          icon={<SearchIcon />}
        />
        <Button
          onClick={handleReset}
          variant="danger"
          className="px-4 h-[38px]"
          icon={<TrashIcon />}
        />
      </div>
    </div>
  );
};

export default FilterContainer;
