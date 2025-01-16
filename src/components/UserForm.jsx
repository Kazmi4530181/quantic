import React from "react";
import { TextField, Button } from "@mui/material";

function UserForm({ btnHandler, formTitle }) {

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
            label="User Name"
            variant="outlined"
            fullWidth
            name="name"
            placeholder="Enter User Name"
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            placeholder="Enter Password"
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

export default UserForm;
