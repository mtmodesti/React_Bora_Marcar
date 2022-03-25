import NewItemButton from "../newItemButton";
import { useItemsList } from "../../provider/ItemsList";

const ProductList = ({ handleOpen, handleOpenEditForm, setItemID }) => {
  const { itemsList } = useItemsList();
  const treatNumbers = (num) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);

  const totalPrice = (itemsArray) => {
    const totalSum = itemsArray.reduce(
      (sum, currentItem) => (sum += currentItem.price * currentItem.quantity),
      0
    );

    return treatNumbers(totalSum);
  };
  return (
    <>
      <div>
        <p>Total Produtos</p>
        <span>{totalPrice(itemsList)}</span>
        <NewItemButton onClick={() => handleOpen()} />
      </div>
      <ul>
        {itemsList.map((item) => (
          <li
            key={item.id}
            info={item}
            onClick={() => {
              handleOpenEditForm();
              setItemID(item.id);
            }}
          >
            <p>{item.itemName}</p>
            <span>{treatNumbers(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
