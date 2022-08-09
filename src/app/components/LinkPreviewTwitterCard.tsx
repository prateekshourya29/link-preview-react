import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
  CardActionArea,
} from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
import { Customization, LinkPreviewResponse } from "../helper";

const LinkPreviewTwitterCard: React.FunctionComponent<Props> = (
  props: Props
) => (
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
        display: "flex",
        width: props.customization.cardWidth,
        height: props.customization.cardHeight || "auto",
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
      <CardMedia
        component="img"
        sx={{
          width: props.customization.cardWidth - 430,
          height: props.customization.cardHeight || "auto",
          objectFit: "contain",
          borderRadius: props.customization.imageRadius + "px",
        }}
        image={props.response.image || ""}
        alt="No Image Found"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardActionArea
          href={props.response.url || "#"}
          target="_blank"
          sx={{ borderRadius: props.customization.cardRadius + "px" }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.response.title}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {props.response.description}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
            <CardActions>
              {props.response.logo && (
                <img src={props.response.logo} width="40px" alt="no logo" />
              )}
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
          </Box>
        </CardActionArea>
      </Box>
    </Card>
  </Grid>
);

interface Props {
  response: LinkPreviewResponse;
  customization: Customization;
}

export default LinkPreviewTwitterCard;
