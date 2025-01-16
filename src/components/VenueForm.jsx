import React from "react";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox, Box } from "@mui/material";

function VenueForm({ btnHandler, formTitle }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
     <div className="container d-flex justify-content-center align-items-center flex-column h-100 w-100">
      <h3 className="title text-center">{formTitle}</h3>
      <div className="content row pb-3 mt-0 w-75">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Venue Name"
            variant="outlined"
            fullWidth
            name="name"
            placeholder="Enter Venue Name"
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            type="text"
            name="price"
            placeholder="Enter Venue Price"
            margin="normal"
          />
           <TextField
            label="Location"
            variant="outlined"
            fullWidth
            type="text"
            name="location"
            placeholder="Enter Venue Location"
            margin="normal"
          />
          <Button
           onClick={btnHandler}
            variant="contained"
            sx={{
	    backgroundColor: 'black',
	    color: 'white',
	    '&:hover': {
	      backgroundColor: '#333',
	    }
	  }}
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VenueForm;
