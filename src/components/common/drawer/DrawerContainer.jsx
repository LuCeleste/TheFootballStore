import {
  Box,
  //   Divider,
  Drawer,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

const DrawerContainer = ({ selected }) => {
  const [state, setState] = useState({
    right: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    ></Box>
  );

  return (
    <div>
      <Fragment>
        {/* <Button onClick={toggleDrawer("right", state["right"])}></Button> */}
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </Fragment>
    </div>
  );
};

export default DrawerContainer;
