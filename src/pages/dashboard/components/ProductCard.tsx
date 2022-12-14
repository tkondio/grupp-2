import React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../../models/Product";

type ItemCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard: React.FC<ItemCardProps> = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="suss"
        width="200px"
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div>{product.name}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>{product.description}</div>
          <div>Hind: {product.price}€</div>
          <div>Suurus: {product.size}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: "#BFCCBA",
            color: "black",
            fontFamily: "Montserrat",
          }}
          size="small"
          onClick={() => addToCart(product)}
        >
          Lisa ostukorvi!
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
