import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
// import Swal from "sweetalert2";
import DrawerContainer from "../drawer/DrawerContainer";

// import styles from "./UserIcon.module.css";
const UserIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = useState(null);
  const handleClose = () => {
    // console.log(event.target.attributes.value?.nodeValue);
    // event.target.attributes.value?.nodeValue
    //   ? setSelectOption(event.target.attributes.value.nodeValue)
    //   : null;
    if (event.target.attributes.value) {
      // Swal.fire();
      console.log("hola");
      setSelected(event.target.attributes.value.nodeValue);
    }
    setAnchorEl(null);
  };

  const handleClickSelect = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Button
        id="user-menu"
        aria-controls={open ? "basic-menu" : undefined}
        // aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickSelect}
      >
        <PersonOutlineOutlinedIcon
          style={{ color: "#6df0f7", fontSize: "2rem" }}
        ></PersonOutlineOutlinedIcon>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          value="Registrarse"
          onClick={handleClose}
          sx={{
            backgroundColor: "black",
            color: "white",
            fontFamily: "frontpageneue",
            ":hover": { color: "var(--main)" },
          }}
          color="black"
        >
          Registrarse
        </MenuItem>
        <MenuItem
          value="Login"
          onClick={handleClose}
          sx={{
            backgroundColor: "black",
            color: "white",
            fontFamily: "frontpageneue",
            ":hover": { color: "var(--main)" },
          }}
        >
          Iniciar Sesión
          {/* <DrawerContainer selected={"Iniciar Sesión"} /> */}
        </MenuItem>
        <MenuItem
          value="Logout"
          onClick={handleClose}
          sx={{
            backgroundColor: "black",
            color: "white",
            fontFamily: "frontpageneue",
            ":hover": { color: "var(--main)" },
          }}
        >
          Cerrar Sesión
        </MenuItem>
      </Menu>

      {selected && <DrawerContainer selected={selected} />}
    </>
  );
};

export default UserIcon;
