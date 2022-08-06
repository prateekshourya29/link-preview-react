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
import { LinkPreviewResponse } from "../helper";

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
    <Grid item>
      <CardActionArea
        href={props.response.url || "#"}
        target="_blank"
        sx={{
          borderRadius: props.borderRadius + "px",
        }}
      >
        <Card
          sx={{
            maxWidth: 320,
            minHeight: 400,
            padding: "5%",
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
            image={props.response.image || ""}
            alt="No Image Found"
            sx={{
              objectFit: "contain",
              borderRadius: props.imageBorderRadius + "px",
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
                textTransform: props.response.publisher
                  ? "Capitalize"
                  : "lowercase",
              }}
            >
              {props.response.publisher || props.response.url}
              <FiExternalLink style={{ marginLeft: "2px" }} />
            </Button>
          </CardActions>
        </Card>
      </CardActionArea>
    </Grid>
  </Grid>
);

interface Props {
  response: LinkPreviewResponse;
  borderRadius: number;
  imageBorderRadius: number;
}

export default LinkPreviewCard;
