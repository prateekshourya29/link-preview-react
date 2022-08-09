import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
import { Customization, LinkPreviewResponse } from "../helper";

const LinkPreviewCard: React.FunctionComponent<Props> = (props: Props) => (
  <Grid
    container
    rowSpacing={2}
    justifyContent="center"
    alignItems="center"
    sx={{
      marginTop: "20px",
    }}
  >
    <Card
      sx={{
        width: props.customization.cardWidth,
        height: props.customization.cardHeight || "auto",
        padding: "10px",
        borderRadius: props.customization.cardRadius + "px",
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
      <CardActionArea
        href={props.response.url || "#"}
        target="_blank"
        sx={{
          borderRadius: props.customization.cardRadius + "px",
        }}
      >
        <CardMedia
          component="img"
          image={props.response.image || ""}
          alt="No Image Found"
          sx={{
            objectFit: "contain",
            borderRadius: props.customization.imageRadius + "px",
          }}
        />

        <CardContent sx={{ margin: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.response.title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {props.response.description}
          </Typography>
        </CardContent>
        <CardActions>
          {props.response.logo && (
            <img src={props.response.logo} width="40px" alt="no logo" />
          )}
          {/* No need to add href here it will bubble up to the CardActionArea Component */}
          <Button
            variant="text"
            sx={{
              ":hover": {
                textDecoration: "underline",
              },
              textTransform: "Capitalize",
            }}
          >
            {props.response.publisher}
            <FiExternalLink style={{ marginLeft: "2px" }} />
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  </Grid>
);

interface Props {
  response: LinkPreviewResponse;
  customization: Customization;
}

export default LinkPreviewCard;
