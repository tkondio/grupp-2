import React from "react";
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ItemCardProps = {}

const ItemCard: React.FC<ItemCardProps> = () => {
  const itemTtitle = "Hall Suss";
  const itemDescription = "Lorem Ipsum Bestseller Item: Desireable, Fasionable, Affordable!"
  const itemPrice = 29;
return (
    <Card sx={{ maxWidth: 300}}>
    <CardMedia
        component="img"
        alt="suss"
        height="140"
        image= ''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div>{itemTtitle}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>{itemDescription}</div>
          <div>Hind: {itemPrice}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Osta!</Button>
      </CardActions>
    </Card>
)

};

export default ItemCard;