import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Skeleton,
} from "@mui/material";

const LinkPreviewSkeleton: React.FunctionComponent = () => (
  <Card
    sx={{
      width: 250,
      height: 420,
      padding: "25px",
      margin: "auto",
      marginTop: "20px",
      ":hover": {
        boxShadow: `
          0 1px 2px rgba(0,0,0,0.07),
          0 2px 4px rgba(0,0,0,0.07), 
          0 4px 8px rgba(0,0,0,0.07), 
          0 8px 16px rgba(0,0,0,0.07),
          0 16px 32px rgba(0,0,0,0.07), 
          0 32px 64px rgba(0,0,0,0.07);
        `,
      },
    }}
  >
    <Skeleton variant="rectangular" height={220} />
    <CardContent sx={{ margin: 0 }}>
      <Typography gutterBottom variant="h5" component="div">
        <Skeleton variant="text" height={50} />
      </Typography>
      <Typography variant="body1" color="text.primary">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Typography>
    </CardContent>
    <CardActions>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width={100} />
    </CardActions>
  </Card>
);

export default LinkPreviewSkeleton;
