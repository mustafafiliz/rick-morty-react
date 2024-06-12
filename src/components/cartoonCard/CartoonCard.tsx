import { Link } from "react-router-dom";
import { ICharacter } from "../../interfaces/characters/characters.interface";

type Props = {
  item: ICharacter;
};

const CartoonCard = ({ item }: Props) => {
  return (
    <div className="border border-gray-200 h-full">
      <img src={item.image} alt={item.name} className="w-full aspect-square" />
      <div className="p-4">
        <h3 className="font-medium text-base">{item.name}</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <strong>Status:</strong> <span>{item.status}</span>
          </li>
          <li>
            <strong>Species:</strong> <span>{item.species}</span>
          </li>
          <li>
            <strong>Gender:</strong> <span>{item.gender}</span>
          </li>
        </ul>
        <Link
          to="/character/1"
          className="bg-primary-500 text-white font-bold px-4 py-3 text-center rounded-lg w-full block mt-4"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CartoonCard;
