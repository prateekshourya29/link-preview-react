import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import { Customization } from "../helper";
import CustomSlider from "./CustomSlider";

const Customizations: React.FunctionComponent<Props> = (props: Props) => (
  <div className="customizations">
    <Grid
      container
      rowSpacing={2}
      columnSpacing={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography gutterBottom>Card Type</Typography>
        <Select
          labelId="card-type-label"
          id="card-type-select"
          value={props.cardType}
          onChange={props.handleCardTypeChange}
          sx={{
            width: "150px",
          }}
        >
          <MenuItem value="Type 1">Type 1</MenuItem>
          <MenuItem value="Type 2">Type 2</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4.5}>
        <Typography gutterBottom>Card Radius</Typography>
        <CustomSlider
          value={props.customization.cardRadius}
          onChange={(e: Event, value: number | number[]) =>
            props.handleCustomizationChange("cardRadius", value as number)
          }
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4.5}>
        <Typography gutterBottom>Image Radius</Typography>
        <CustomSlider
          value={props.customization.imageRadius}
          onChange={(e: Event, value: number | number[]) =>
            props.handleCustomizationChange("imageRadius", value as number)
          }
          max={150}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4.5}>
        <Typography gutterBottom>Card Width</Typography>
        <CustomSlider
          value={props.customization.cardWidth}
          onChange={(e: Event, value: number | number[]) =>
            props.handleCustomizationChange("cardWidth", value as number)
          }
          min={200}
          max={750}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4.5}>
        <Typography gutterBottom>Card Height</Typography>
        <CustomSlider
          value={props.customization.cardHeight}
          onChange={(e: Event, value: number | number[]) =>
            props.handleCustomizationChange("cardHeight", value as number)
          }
          min={100}
          max={900}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Grid>
    </Grid>
  </div>
);

interface Props {
  cardType: string;
  handleCardTypeChange: (e: SelectChangeEvent) => void;
  customization: Customization;
  handleCustomizationChange: (key: string, value: number) => void;
}

export default Customizations;
