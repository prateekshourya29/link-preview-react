import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import LinkPreviewCard from "./LinkPreviewCard";
import { urlPattern } from "../helper";
import LinkPreviewSkeleton from "./LinkPreviewSkeleton";

const LinkPreview: React.FunctionComponent = () => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<LinkPreviewResponse | null>(null);
  const [error, setError] = useState<string>("");

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

  const onUrlChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error !== "") setError("");
    setUrl(e.target.value);
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
              onChange={onUrlChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={loading}
            >
              Get Link Preview
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
      {loading ? (
        <LinkPreviewSkeleton />
      ) : (
        response && <LinkPreviewCard response={response} />
      )}
    </div>
  );
};

export interface LinkPreviewResponse {
  author: string | null;
  date: string | null;
  title: string | null;
  description: string | null;
  image: string | null;
  logo: string | null;
  publisher: string | null;
  url: string | null;
}

export default LinkPreview;
