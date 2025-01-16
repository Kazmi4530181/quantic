import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import AddonForm from "./PriceForm"; 

const editAddon = (setShowEditForm) => {
  setShowEditForm(false);
}

const addAddon = (setShowAddForm) => {
  setShowAddForm(false);
}

function Addon() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const rows = [
    { id: 1, addon: 'Decorations', price: '5,000 PKR'},
    { id: 2, addon: 'Catering', price: '15,000 PKR' },
    { id: 3, addon: 'Audio System', price: '10,000 PKR' },
    { id: 4, addon: 'Lighting', price: '7,000 PKR' },
    { id: 5, addon: 'Photography', price: '20,000 PKR' },
    { id: 6, addon: 'Videography', price: '25,000 PKR' },
    { id: 7, addon: 'Security Service', price: '10,000 PKR' },
    { id: 8, addon: 'Stage Setup', price: '12,000 PKR' },
    { id: 9, addon: 'Transport Service', price: '8,000 PKR' },
    { id: 10, addon: 'Event Coordination', price: '18,000 PKR' },
  ];
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
    { field: 'addon', headerName: 'Addon Name', width: 200, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
    { field: 'price', headerName: 'Price', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
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
          <a href="/addon/delete/">
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
    !showAddForm && ! showEditForm ?
    <div className="content container-fluid">
           <h3 className="title text-center">Addons</h3>
           <a onClick={()=>setShowAddForm(true)} href="#" className="btn btn-primary my-2" style={{backgroundColor: "#505050", borderColor: '#505050'}}>
                   <FontAwesomeIcon icon={faPlus} />
                   &nbsp;Add Prices
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
        <AddonForm btnHandler={()=>addAddon(setShowAddForm)} formTitle={"Add Price"} />
      </div>:
      <div className="content container-fluid">
      <AddonForm btnHandler={()=>editAddon(setShowEditForm)} formTitle={"Edit Price"} />
      </div>
  );
}

export default Addon;
