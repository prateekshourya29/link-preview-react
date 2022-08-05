import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
import { LinkPreviewResponse } from "./LinkPreview";

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
      <Card
        sx={{
          maxWidth: 320,
          minHeight: 400,
          padding: "5%",
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
          height="250px"
          image={props.response.image || ""}
          alt="no image found"
          sx={{
            objectFit: "scale-down",
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
          <Button
            variant="text"
            href={props.response.url || "#"}
            target="_blank"
            sx={{
              ":hover": {
                textDecoration: "underline",
              },
              textTransform: "lowercase",
            }}
          >
            {props.response.publisher || props.response.url}
            <FiExternalLink style={{ marginLeft: "2px" }} />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

interface Props {
  response: LinkPreviewResponse;
}

export default LinkPreviewCard;
