import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/joy/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/joy/Button";

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <Tooltip title="いいね!">
      <IconButton
        variant="solid"
        sx={{
          position: "absolute",
          right: "1rem",
          bottom: 0,
          transform: "translateY(50%)",
        }}
        onClick={handleClick}
      >
        <Button
          size="md"
          sx={{
            color: "white",
            bgcolor: "rgb(231, 76, 60)",
            valid: "solid",
            pointerEvents: "none",
          }}
          startIcon={<FavoriteBorder />}
        >
          {count}
        </Button>
      </IconButton>
    </Tooltip>
  );
}

export default LikeButton;
