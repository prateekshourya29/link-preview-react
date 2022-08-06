import React, { Fragment, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Grid, SelectChangeEvent, TextField } from "@mui/material";
import LinkPreviewCard from "./LinkPreviewCard";
import { CardType, LinkPreviewResponse, urlPattern } from "../helper";
import LinkPreviewSkeleton from "./LinkPreviewSkeleton";
import LinkPreviewTwitterCard from "./LinkPreviewTwitterCard";
import Customizations from "./Customizations";

const LinkPreview: React.FunctionComponent = () => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<LinkPreviewResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [showCustomizations, setShowCustomizations] = useState<boolean>(false);
  const [cardType, setCardType] = useState<CardType>("Type 1");
  const [borderRadius, setBorderRadius] = useState<number>(15);
  const [imageBorderRadius, setImageBorderRadius] = useState<number>(7);

  // useEffect(() => {
  //   const resp = {
  //     author: null,
  //     date: null,
  //     description:
  //       "Full-Stack Developer. prateekshourya29 has 8 repositories available. Follow their code on GitHub.",
  //     image: "https://avatars.githubusercontent.com/u/33979846?v=4?s=400",
  //     logo: "https://logo.clearbit.com/github.com",
  //     publisher: "GitHub",
  //     title: "prateekshourya29 - Overview",
  //     url: "https://github.com/prateekshourya29",
  //   };
  //   setResponse(resp);
  // }, []);

  const handleUrlChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error !== "") setError("");
    setUrl(e.target.value);
  };

  const handleCardTypeChange = (e: SelectChangeEvent) => {
    setCardType(e.target.value as CardType);
  };

  const handleBorderRadiusChange = (e: Event, value: number | number[]) => {
    setBorderRadius(value as number);
  };

  const handleImageBorderRadiusChange = (
    e: Event,
    value: number | number[]
  ) => {
    setImageBorderRadius(value as number);
  };

  const checkError = () => {
    if (url === "") {
      setError("Please enter an url to continue");
      return true;
    }

    if (!urlPattern.test(url)) {
      setError("Please Enter a valid url!");
      return true;
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkError()) return;

    setLoading(true);

    // fetch(
    //   `https://v1.nocodeapi.com/20010349/link_preview/SBpgGHsbTkmhONvx?url=${url}`
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resp: LinkPreviewResponse) => setResponse(resp))
    //   .then(() => setUrl(""))
    //   .then(() => setLoading(false))
    //   .catch((error) => {
    //     console.log("error", error);
    //     setUrl("");
    //     setLoading(false);
    //   });

    // Assuming that the response will always have a title.
    fetch(
      `https://api.linkpreview.net/?key=a0048732a8701a66fecbddf3f5ba40e0&q=${url}`
    )
      .then((response) => response.json())
      .then((resp: LinkPreviewResponse) => setResponse(resp))
      .then(() => setUrl(""))
      .then(() => setLoading(false))
      .catch((error) => {
        console.log("error", error);
        setUrl("");
        setLoading(false);
      });
  };

  const clear = (e: React.MouseEvent) => {
    e.preventDefault();
    setResponse(null);
    setUrl("");
  };

  return (
    <div className="link-preview">
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={5}>
            <TextField
              id="url-input"
              error={!!error}
              label="Enter an URL for preview"
              helperText={error}
              value={url}
              onChange={handleUrlChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            {response && !url ? (
              <LoadingButton
                variant="contained"
                color="error"
                size="large"
                onClick={clear}
              >
                Clear
              </LoadingButton>
            ) : (
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={loading}
              >
                Get Link Preview
              </LoadingButton>
            )}
          </Grid>
        </Grid>
      </form>
      {loading ? (
        <LinkPreviewSkeleton />
      ) : (
        response && (
          <Fragment>
            {cardType === "Type 1" ? (
              <LinkPreviewCard
                response={response}
                borderRadius={borderRadius}
                imageBorderRadius={imageBorderRadius}
              />
            ) : (
              <LinkPreviewTwitterCard
                response={response}
                borderRadius={borderRadius}
                imageBorderRadius={imageBorderRadius}
              />
            )}
            <LoadingButton
              variant="contained"
              color={!showCustomizations ? "primary" : "secondary"}
              onClick={() => setShowCustomizations(!showCustomizations)}
              sx={{ marginTop: "20px" }}
            >
              {!showCustomizations
                ? "Customize"
                : "Hide Customization Settings"}
            </LoadingButton>
            {showCustomizations && (
              <Customizations
                cardType={cardType}
                handleCardTypeChange={handleCardTypeChange}
                borderRadius={borderRadius}
                handleBorderRadiusChange={handleBorderRadiusChange}
                imageBorderRadius={imageBorderRadius}
                handleImageBorderRadiusChange={handleImageBorderRadiusChange}
              />
            )}
          </Fragment>
        )
      )}
    </div>
  );
};

export default LinkPreview;
