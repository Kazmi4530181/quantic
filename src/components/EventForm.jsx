import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox, Box } from "@mui/material";

function EventForm({ btnHandler, formTitle }) {

  const [paymentMethod, setPaymentMethod] = useState('');
  const [addons, setAddons] = useState({ decorations: false, catering: false, print: false });

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddonChange = (event) => {
    setAddons({ ...addons, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column w-100">
      <h3 className="title text-center py-2">{formTitle}</h3>
      <div className="content row pb-3 w-75">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Registerer Name"
            variant="outlined"
            fullWidth
            name="name"
            placeholder="Enter Registerer Name"
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            placeholder="example@gmail.com"
            margin="normal"
          />
          <TextField
            label="Event Name"
            variant="outlined"
            fullWidth
            name="eventname"
            placeholder="Enter Event Name"
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Event Type</InputLabel>
            <Select name="eventtype" defaultValue="" label="Event Type">
              <MenuItem value="Milad">Milad</MenuItem>
              <MenuItem value="Majlis">Majlis</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Venue</InputLabel>
            <Select name="venue" defaultValue="" label="Venue">
              <MenuItem value="Milad">Milad</MenuItem>
              <MenuItem value="Majlis">Majlis</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Promo/Referral Code"
            variant="outlined"
            fullWidth
            name="promo"
            placeholder="Enter promo or referral code"
            margin="normal"
          />
          <Box display="flex" gap={2} marginBottom={2}>
            <TextField
              label="Start Date"
              variant="outlined"
              type="date"
              fullWidth
              name="date"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Start Time"
              variant="outlined"
              type="time"
              fullWidth
              name="starttime"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Time"
              variant="outlined"
              type="time"
              fullWidth
              name="endtime"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <FormControl component="fieldset" margin="normal">
            <p>Payment Method</p>
            <RadioGroup
              name="payment"
              value={paymentMethod}
              onChange={handlePaymentChange}
              row
            >
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="online" control={<Radio />} label="Online" />
            </RadioGroup>
          </FormControl>
          <p>Addons</p>
          <Box display="flex" gap={4} marginBottom={2}>
            <FormControlLabel
              control={<Checkbox checked={addons.decorations} onChange={handleAddonChange} name="decorations" />}
              label="Decorations"
            />
            <FormControlLabel
              control={<Checkbox checked={addons.catering} onChange={handleAddonChange} name="catering" />}
              label="Catering"
            />
          </Box>
          <FormControlLabel
            control={<Checkbox checked={addons.print} onChange={handleAddonChange} name="print" />}
            label="Print Invoice"
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

export default EventForm;

