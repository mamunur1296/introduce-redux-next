import {
  DeleteFromCard,
  addToCard,
} from "@/redux/actionCreators/productActions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const { image, model, keyFeature, quantity, price, spec } = product;
  return (
    <div className="max-w-md  relative  rounded-lg   p-2">
      <img className="h-60 w-full" src={image} alt="" />
      <h4 className="text-xl my-3">{model}</h4>
      <p>{quantity}</p>
      <div className="overflow-hidden mb-10">
        <ul className="flex flex-col text-sm py-2 overflow-hidden space-y-2">
          {keyFeature?.map((element, i) => (
            <li key={i}>{`${element}`}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between absolute right-0 left-0 bottom-0 overflow-hidden  space-x-2 ">
        {!pathname.includes("product") ? (
          <>
            <button
              onClick={() => dispatch(DeleteFromCard(product))}
              className="bg-orange-400 w-4/12 p-2 rounded-full  "
            >
              dele
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => dispatch(addToCard(product))}
              className="bg-orange-400    w-full rounded-full p-2 "
            >
              Add to card
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
