import React from "react";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';
import EventForm from "./EventForm";

const editEvent = (setShowEditForm) => {
  setShowEditForm(false);
}

const addEvent = (setShowAddForm) => {
  setShowAddForm(false);
}

function EventList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
const rows = [
  { id: 1, event: 'Event A', date: '2025-01-20', location: 'City A', start_time: '10:00 AM', end_time: '11:30 AM', amount: '15,000 PKR', ref_code: 'PK21001', payment: 'Online' },
  { id: 2, event: 'Event B', date: '2025-02-15', location: 'City B', start_time: '12:00 PM', end_time: '1:00 PM', amount: '10,000 PKR', ref_code: 'PK21007', payment: 'Cash' },
  { id: 3, event: 'Event C', date: '2025-03-05', location: 'City C', start_time: '2:00 PM', end_time: '3:30 PM', amount: '8,500 PKR', ref_code: 'PK21009', payment: 'Credit Card' },
  { id: 4, event: 'Event D', date: '2025-03-20', location: 'City D', start_time: '11:00 AM', end_time: '12:30 PM', amount: '12,000 PKR', ref_code: 'PK21012', payment: 'Online' },
  { id: 5, event: 'Event E', date: '2025-04-10', location: 'City E', start_time: '9:00 AM', end_time: '10:30 AM', amount: '9,000 PKR', ref_code: 'PK21015', payment: 'Cash' },
  { id: 6, event: 'Event F', date: '2025-04-25', location: 'City F', start_time: '4:00 PM', end_time: '5:30 PM', amount: '18,000 PKR', ref_code: 'PK21018', payment: 'Online' },
  { id: 7, event: 'Event G', date: '2025-05-05', location: 'City G', start_time: '3:00 PM', end_time: '4:30 PM', amount: '11,000 PKR', ref_code: 'PK21021', payment: 'Credit Card' },
  { id: 8, event: 'Event H', date: '2025-05-20', location: 'City H', start_time: '1:00 PM', end_time: '2:30 PM', amount: '13,500 PKR', ref_code: 'PK21024', payment: 'Cash' },
  { id: 9, event: 'Event I', date: '2025-06-10', location: 'City I', start_time: '5:00 PM', end_time: '6:30 PM', amount: '14,000 PKR', ref_code: 'PK21027', payment: 'Online' },
  { id: 10, event: 'Event J', date: '2025-06-25', location: 'City J', start_time: '10:00 AM', end_time: '11:00 AM', amount: '7,500 PKR', ref_code: 'PK21030', payment: 'Credit Card' },
];

const columns = [
  { field: 'id', headerName: 'Invoice', width: 100,  headerAlign: "center", align: "center", headerClassName: 'custom-cell'},
  { field: 'event', headerName: 'Event', width: 200, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'date', headerName: 'Date', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'location', headerName: 'Location', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'start_time', headerName: 'Start Time', width: 100, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'end_time', headerName: 'End Time', width: 100, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'amount', headerName: 'Amount', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'ref_code', headerName: 'Referal/Promo', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell' },
  { field: 'payment', headerName: 'Payment', width: 150, headerAlign: "center", align: "center", headerClassName: 'custom-cell', flex: 1 },
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
    headerClassName: 'custom-cell' 
  },
  {
    field: 'reject', 
    headerName: 'Reject', 
    width: 100,
    renderCell: (params) => (
      <div>
        <a href="/addon/edit/">
         <FontAwesomeIcon className="text-dark" icon={faTrash} /> 
        </a>
      </div>
    ),
    headerAlign: "center", 
    align: "center", 
    headerClassName: 'custom-cell' 
  },
];

  return (
    !showAddForm && ! showEditForm ?
    <div className="container-flex w-100">
      <a onClick={()=>setShowAddForm(true)} href="#" className="btn btn-primary my-2" style={{backgroundColor: "#505050", borderColor: '#505050'}}>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;Add Events
            </a>
    	<div className="d-flex justify-content-center">
	    <DataGrid 
	     rows={rows} 
	     columns={columns} 
	     pageSize={5}
	     sx={{
		'& .MuiDataGrid-root': {
		    border: '2px solid #1976d2',
		    background: "#1976d2 !important",
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
        <EventForm btnHandler={()=>addEvent(setShowAddForm)} formTitle={"Add Event"} />
     </div>:
     <div className="content container-fluid">
     <EventForm btnHandler={()=>editEvent(setShowEditForm)} formTitle={"Edit Event"} />
     </div>

  );
}

export default EventList;
