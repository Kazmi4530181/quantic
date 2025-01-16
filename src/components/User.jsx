import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import UserForm from "./UserForm";


const editUser = (setShowEditForm) => {
  setShowEditForm(false);
}

const addUser = (setShowAddForm) => {
  setShowAddForm(false);
}


function User() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const rows = [
    { id: 1, username: 'JohnDoe', role: 'Admin' },
    { id: 2, username: 'JaneSmith', role: 'User' },
    { id: 3, username: 'AliceBrown', role: 'Editor' },
    { id: 4, username: 'BobWhite', role: 'Viewer' },
    { id: 5, username: 'CharlieGreen', role: 'Admin' },
    { id: 6, username: 'DianaBlue', role: 'User' },
    { id: 7, username: 'EdwardYellow', role: 'Editor' },
    { id: 8, username: 'FionaPink', role: 'Viewer' },
    { id: 9, username: 'GeorgeRed', role: 'Admin' },
    { id: 10, username: 'HannahPurple', role: 'User' },
  ];
  
  const columns = [
    { field: 'id', headerName: 'User ID', width: 100, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
    { field: 'username', headerName: 'User Name', width: 200, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
    { field: 'role', headerName: 'Role', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell',  flex: 1 },
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
          <a href="/user/delete/">
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
    	<h3 className="title text-center">Users</h3>
      <a onClick={()=>setShowAddForm(true)} className="btn btn-primary my-2" style={{backgroundColor: "#505050", borderColor: '#505050'}}>
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;Add Users
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
   <UserForm btnHandler={()=>addUser(setShowAddForm)} formTitle={"Add User"}/>
   </div>
   :
   <div className="content container-fluid">
   <UserForm btnHandler={()=>editUser(setShowEditForm)} formTitle={"Edit User"} />
   </div>
  );
}

export default User;
