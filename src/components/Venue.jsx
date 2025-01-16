import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import VenueForm from "./VenueForm";


const editVenue = (setShowEditForm) => {
  setShowEditForm(false);
}

const addVenue = (setShowAddForm) => {
  setShowAddForm(false);
}

function Venue() {

 const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  
const rows = [
  { id: 1, venue: 'Grand Hall', price: '20,000 PKR', location: 'City A' },
  { id: 2, venue: 'Royal Pavilion', price: '35,000 PKR', location: 'City B' },
  { id: 3, venue: 'Sunset Park', price: '15,000 PKR', location: 'City C' },
  { id: 4, venue: 'Moonlight Garden', price: '25,000 PKR', location: 'City D' },
  { id: 5, venue: 'Blue Sky Auditorium', price: '30,000 PKR', location: 'City E' },
  { id: 6, venue: 'Golden Palace', price: '40,000 PKR', location: 'City F' },
  { id: 7, venue: 'Lakeside Retreat', price: '22,000 PKR', location: 'City G' },
  { id: 8, venue: 'Crystal Ballroom', price: '18,000 PKR', location: 'City H' },
  { id: 9, venue: 'Pearl Beach', price: '28,000 PKR', location: 'City I' },
  { id: 10, venue: 'Emerald Tower', price: '45,000 PKR', location: 'City J' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 100, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
  { field: 'venue', headerName: 'Venue Name', width: 200, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
  { field: 'price', headerName: 'Price', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
  { field: 'location', headerName: 'Location', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
   {
    field: 'edit', 
    headerName: 'Edit', 
    width: 100,
    renderCell: (params) => (
      <div>
        <a onClick={()=>setShowEditForm(true)} href="#">
         <FontAwesomeIcon className="text-dark" icon={faEdit} /> 
        </a>
      </div>
    ),
    headerAlign: "center", 
    align: "center",
    headerClassName: 'custom-cell',
     flex: 1
  },
  {
    field: 'delete', 
    headerName: 'Delete', 
    width: 100,
    renderCell: (params) => (
      <div>
        <a href="/venue/edit/">
         <FontAwesomeIcon className="text-dark" icon={faTrash} /> 
        </a>
      </div>
    ),
    headerAlign: "center", 
    align: "center",
    headerClassName: 'custom-cell',
     flex: 1
  },
];
  return (
    !showAddForm && !showEditForm ?
    <div className="content container-fluid">
    	 <h3 className="title text-center">Venues</h3>
       <a onClick={()=>setShowAddForm(true)} href="#" className="btn btn-primary my-2" style={{backgroundColor: "#505050", borderColor: '#505050'}}>
               <FontAwesomeIcon icon={faPlus} />
               &nbsp;Add Venues
        </a>
         <div className="d-flex justify-content-center">
	    <DataGrid 
	     rows={rows} 
	     columns={columns} 
	     pageSize={5}
	     sx={{
		    '& .MuiDataGrid-root': {
		    border: '2px solid #1976d2',
		  },
		  '& .MuiDataGrid-columnHeaders': {
		    color: "#fff",
		    fontSize: "1rem",
		    fontWeight: "bold",
		    textAlign: "center",
		    justifyContent: "center"
		  },
		  '& .MuiDataGrid-row:nth-of-type(odd)': {
		    backgroundColor: '#7ac04f',
		    color: '#fff',
		  },
		  '& .MuiDataGrid-row:nth-of-type(even)': {
		    backgroundColor: '#fff',
		    color: '#7ac04f'
		  },
		  '& .MuiDataGrid-row:hover': {
		    backgroundColor: '#505050',
		    color: '#7ac04f'
		  },
		   "& .MuiDataGrid-cell": {
		    textAlign: "center",
		  }
              }}
	     />
	</div>
    </div>:
    showAddForm ?
    <div className="content container-fluid">
       <VenueForm btnHandler={()=>addVenue(setShowAddForm)} formTitle={"Add Venue"} />
    </div>:
    <div className="content container-fluid">
    <VenueForm btnHandler={()=>editVenue(setShowEditForm)} formTitle={"Edit Venue"} />
	  </div>
  );
}

export default Venue;
