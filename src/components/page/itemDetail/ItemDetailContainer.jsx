import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFirestore from "../../../hooks/useFirebase";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box, Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item] = useFirestore("products", id);
  const { addToCart } = useContext(CartContext);

  function agregarAlCarrito(size, selectOption, quantityRef) {
    if (size === "") {
      toast.error("Debe elegir el talle de la camiseta", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let data = {
        id: id,
        ...item,
        quantity:
          quantityRef.current.value === ""
            ? 1
            : Number(quantityRef.current.value),
        size: size,
        selectOption: selectOption,
      };
      console.log(data);

      addToCart(data);
    }
  }
  return (
    <>
      {item?.title !== undefined ? (
        <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "2rem 0rem",
            // gap: "2rem",
            justifyContent: "space-around",
          }}
        >
          <Skeleton variant="rectangular" width={500} height={500} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "350px",
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: "32px" }} width={350} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ItemDetailContainer;
