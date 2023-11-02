import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import SizeButton from "../../common/sizeButton/SizeButton";
import styles from "./ItemDetail.module.css";
import { ToastContainer } from "react-toastify";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  const [sizeOption, setSizeOption] = useState("");
  const quantityRef = useRef();
  const [selectOption, setSelectOption] = useState("No");

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setSelectOption(event.target.value);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickSelect = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log(event.target.attributes.value?.nodeValue);
    event.target.attributes.value?.nodeValue
      ? setSelectOption(event.target.attributes.value.nodeValue)
      : null;
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "2rem 0rem",
        // gap: "2rem",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          height: "600px",
        }}
      >
        <Box>
          {item.imgUrl.map((image) => {
            return (
              <Image
                width={150}
                key={image}
                src={image}
                className={styles.images}
              />
            );
          })}
        </Box>
        <Image
          width={600}
          src={`${item.imgUrl[0]}`}
          className={styles.images}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "400px",
          gap: "17px",
        }}
      >
        <Typography
          style={{ fontFamily: "Bebas Neue" }}
          variant="h1"
          component="div"
          sx={{
            fontSize: "32px",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "25px",
            fontFamily: "bebas neue",
            color: "var(--main)",
          }}
        >
          $25.000
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "25px", fontFamily: "frontpageneue" }}
        >
          Ver medios de pago
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ backgroundColor: "var(--accent)" }}
        />
        <Typography
          variant="body1"
          sx={{ fontSize: "25px", fontFamily: "frontpageneue" }}
        >
          Seleccionar Talle
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {item.size.map((size) => {
            return (
              <SizeButton
                key={size}
                size={size}
                setSizeOption={setSizeOption}
              />
            );
          })}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "22px",
              fontFamily: "frontpageneue",
              color: "var(--main)",
            }}
          >
            Talle {sizeOption}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "22px", fontFamily: "frontpageneue" }}
          >
            Guía de talles
          </Typography>
        </Box>
        {/* </Box> */}
        <Typography
          variant="body2"
          sx={{ fontSize: "19px", fontFamily: "frontpageneue" }}
        >
          Personalizada(Dorsal y/o Parches)
        </Typography>
        <Button
          id="basic-button"
          variant="outlined"
          sx={{
            width: "70px",
            height: "50px",
            textAlign: "center",
            fontFamily: "frontpageneue",
            fontSize: "15px",
            border: "1px solid white",
            color: "white",
            textTransform: "capitalize",
            ":hover": { border: "1px solid var(--main)", color: "var(--main)" },
          }}
          aria-controls={open ? "basic-menu" : undefined}
          // aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickSelect}
        >
          {selectOption}
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            value="No"
            onClick={handleClose}
            sx={{
              backgroundColor: "black",
              color: "white",
              fontFamily: "frontpageneue",
              ":hover": { color: "var(--main)" },
            }}
            color="black"
          >
            No
          </MenuItem>
          <MenuItem
            value="Si"
            onClick={handleClose}
            sx={{
              backgroundColor: "black",
              color: "white",
              fontFamily: "frontpageneue",
              ":hover": { color: "var(--main)" },
            }}
          >
            Si
          </MenuItem>
        </Menu>
        <Typography
          variant="body2"
          sx={{ fontSize: "19px", fontFamily: "frontpageneue" }}
        >
          Cantidad
        </Typography>

        <input
          placeholder="1"
          type="number"
          className={styles.inputNumber}
          ref={quantityRef}
        ></input>
        <Button
          variant="outlined"
          sx={{
            width: "400px",
            backgroundColor: "var(--main)",
            textTransform: "uppercase",
            fontFamily: "Bebas Neue",
            color: "white",
            fontSize: "17px",
            padding: "12px",
            borderColor: "white",
            ":hover": {
              backgroundColor: "black",
              borderColor: "gray",
              color: "gray",
            },
          }}
          onClick={() =>
            agregarAlCarrito(sizeOption, selectOption, quantityRef)
          }
        >
          Agregar a tu lista de deseos
        </Button>
        <ToastContainer className={styles.toast} />
      </Box>
    </Box>
  );
};

export default ItemDetail;
