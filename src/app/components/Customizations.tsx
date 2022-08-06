import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
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
      <Grid item xs={12} md={2}>
        <Typography gutterBottom>Card Type</Typography>
        <Select
          labelId="card-type-label"
          id="card-type-select"
          value={props.cardType}
          onChange={props.handleCardTypeChange}
          fullWidth
        >
          <MenuItem value="Type 1">Type 1</MenuItem>
          <MenuItem value="Type 2">Type 2</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography gutterBottom>Border Radius</Typography>
        <CustomSlider
          value={props.borderRadius}
          onChange={props.handleBorderRadiusChange}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography gutterBottom>Image Border Radius</Typography>
        <CustomSlider
          value={props.imageBorderRadius}
          onChange={props.handleImageBorderRadiusChange}
          max={150}
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
  borderRadius: number;
  handleBorderRadiusChange: (e: Event, value: number | number[]) => void;
  imageBorderRadius: number;
  handleImageBorderRadiusChange: (e: Event, value: number | number[]) => void;
}

export default Customizations;
