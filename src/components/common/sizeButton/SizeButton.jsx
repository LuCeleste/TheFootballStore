import { Button } from "@mui/material";

const SizeButton = ({ size, setSizeOption }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        // padding: "10px",
        color: "white",
        fontSize: "15px",
        height: "55px",
        width: "55px",
        fontFamily: "Bebas neue",
        // p: "1",
        borderColor: "white",
        ":hover": { color: "var(--main)", borderColor: "var(--main)" },
      }}
      onClick={() => setSizeOption(size)}
    >
      {size}
    </Button>
  );
};

export default SizeButton;
