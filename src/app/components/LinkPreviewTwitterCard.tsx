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
import { LinkPreviewResponse } from "../helper";

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
    <Grid item>
      <Card
        sx={{
          display: "flex",
          maxWidth: 600,
          borderRadius: props.borderRadius + "px",
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
            width: 170,
            objectFit: "contain",
            borderRadius: props.imageBorderRadius + "px",
          }}
          image={props.response.image || ""}
          alt="No Image Found"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardActionArea
            href={props.response.url || "#"}
            target="_blank"
            sx={{ borderRadius: props.borderRadius + "px" }}
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
                    textTransform: props.response.publisher
                      ? "Capitalize"
                      : "lowercase",
                  }}
                >
                  {props.response.publisher || props.response.url}
                  <FiExternalLink style={{ marginLeft: "2px" }} />
                </Button>
              </CardActions>
            </Box>
          </CardActionArea>
        </Box>
      </Card>
    </Grid>
  </Grid>
);

interface Props {
  response: LinkPreviewResponse;
  borderRadius: number;
  imageBorderRadius: number;
}

export default LinkPreviewTwitterCard;
