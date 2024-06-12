import { Link } from "react-router-dom";

type Props = {
  item: any;
};

const CartoonCard = ({ item }: Props) => {
  return (
    <div className="border border-gray-200">
      <img src="" alt="" className="w-full aspect-square" />
      <div className="p-4">
        <h3 className="font-medium text-base">Rick Sanchez</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <strong>Status:</strong> <span>Alive</span>
          </li>
          <li>
            <strong>Species:</strong> <span>Human</span>
          </li>
          <li>
            <strong>Gender:</strong> <span>Male</span>
          </li>
        </ul>
        <Link
          to="/character/1"
          className="bg-primary-500 text-white font-bold px-4 py-3 text-center rounded-2xl w-full block mt-4"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CartoonCard;
