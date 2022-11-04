import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../../common/theme";
import { CartItemType } from "../../../models/Cart";
import { Product } from "../../../models/Product";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    alignContent: "center",
  },
  col2: {
    flex: 2,
    color: "white",
    textAlign: "center",
  },
  block: {
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
    //margin: 10,
    borderRadius: 12,
  },
  img: {
    width: 100,
  },
});
type CartItemProps = {
  product: CartItemType;
  onAdd: (product: CartItemType) => void;
  onRemove: (product: CartItemType) => void;
  deleteItem: (productList: CartItemType) => Promise<void>;
};

const CartItem: React.FC<CartItemProps> = ({
  product,
  onAdd,
  onRemove,
  deleteItem,
}) => {
  const classes = useStyles();
  const handleDelete = async () => {
    await deleteItem(product);
  };

  return (
    <div className={classes.block}>
      <div className={classes.row}>
        <div className={`${classes.col2} ${classes.img}`}>
          <img
            className={classes.img}
            src={product.imageUrl}
            alt="Toote pilt"
          />
        </div>
        <div className={classes.col2}>{product.name}</div>
        <div className={classes.col2}>{`Kogus: ${product.qty}`}</div>
        <div className={classes.col2}>{`Suurus: ${product.size}`}</div>
        <div className={classes.col2}>{`Hind: ${product.price}€`}</div>
        <div className={classes.col2}>
          <button onClick={() => onAdd(product)}>+</button>
          <button onClick={() => onRemove(product)}>-</button>
        </div>
        <div className={classes.col2}>
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            KUSTUTA
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
