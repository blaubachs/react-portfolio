import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Work({ title, alt, src, link, description }) {
  return (
    <div>
      <Card sx={{ width: 600, height: 500 }}>
        <CardMedia sx={{ height: 300 }} image={src} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={link} target="_blank" rel="noreferrer">
            <Button size="small">Check It Out</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
