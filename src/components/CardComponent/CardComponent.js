import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CartContext from "../../CartContext/CartContext";

// Card component extraida de material ui, en esta extraigo las caracteristicas de la db que quiero

const CardComponent = ({ celularData, showAddCart = true }) => {
  const { addItem } = useContext(CartContext);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={celularData.img} alt="green iguana" style={{maxHeight: "150px", objectFit: "contain"}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {celularData.nombre}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Precio :{celularData.precio}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Stock:{celularData.stock}
        </Typography>
        {showAddCart && (
          <button onClick={() => addItem(celularData, 1)}>
            Agregar al carrito
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
