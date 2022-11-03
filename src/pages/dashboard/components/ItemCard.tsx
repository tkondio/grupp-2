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
};


const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="suss"
        height="140"
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div>{product.name}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>{product.description}</div>
          <div>Hind: {product.price}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor:'#BFCCBA', color:'black'}} size="small">Osta</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
