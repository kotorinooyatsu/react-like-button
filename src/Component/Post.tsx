import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import LikeButton from "./LikeButton";
import Button from "@mui/joy/Button";
import rurikoin from "../image/rurikoin.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function MultipleInteractionCard() {
  return (
    <Card variant="outlined" sx={{ minWidth: 200 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={rurikoin} alt="瑠璃光院" />
        </AspectRatio>
        <LikeButton />
      </CardOverflow>
      <Typography component="h4" sx={{ fontSize: "md", mt: 4 }}>
        瑠璃光院
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Button size="sm" startIcon={<LocationOnIcon />}>
          京都府
        </Button>
      </Typography>
    </Card>
  );
}
