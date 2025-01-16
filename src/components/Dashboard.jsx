import React from "react";
import { Card, CardContent, CardActions, Typography,  Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faBook, faCreditCard, faTimesCircle, faClock, faMapMarkerAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment-hijri";

const localizer = momentLocalizer(moment);

const user = [
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

const formatHijriDate = (date) => moment(date).add(-1, "days").format("iMMMM iDD");

const formatGregorianDate = (date) => moment(date).format("DD MMMM YY, ");

function Dashboard() {

  return (
    <div className="container-flex w-100">
      <div className="content mt-4">
        <h3 className="title text-center">
          {formatGregorianDate()}&nbsp;
          {formatHijriDate()}
        </h3>
        <div className="dash-cards row d-flex justify-content-center w-100">
          <Card className="dash-card" style={{margin: 10, backgroundColor: '#8c52ff', color: '#fff', textAlign: 'center', transition:'0.8s' }}>
            <FontAwesomeIcon className="dash-icon" icon={faBook} style={{ padding: "0.5rem", marginTop: "0.5rem", backgroundColor: '#c5aafa', borderRadius: '100%', width: '2rem', height: '2rem' }} />
            <CardContent>
              <Typography className="dash-title" variant="h5">Total Bookings</Typography>
              <Typography className="dash-data" variant="h5" color="white">
                120 Bookings
              </Typography>
            </CardContent>
          </Card>
          <Card className="dash-card" style={{margin: 10, backgroundColor: '#42b8fd', color: '#fff', textAlign: 'center', transition:'0.8s' }}>
            <FontAwesomeIcon className="dash-icon" icon={faDollar} style={{ padding: "0.5rem", marginTop: "0.5rem", backgroundColor: '#a1dcff', borderRadius: '100%', width: '2rem', height: '2rem' }} />
            <CardContent>
              <Typography className="dash-title" variant="h5">Total Revenue</Typography>
              <Typography className="dash-data" variant="h5" color="white">
                120 PKR
              </Typography>
            </CardContent>
          </Card>
          <Card className="dash-card" style={{margin: 10, backgroundColor: '#004aad', color: '#fff', textAlign: 'center', transition:'0.8s' }}>
            <FontAwesomeIcon className="dash-icon" icon={faCreditCard} style={{ padding: "0.5rem", marginTop: "0.5rem", backgroundColor: '#6eacff', borderRadius: '100%', width: '2rem', height: '2rem' }} />
            <CardContent>
              <Typography className="dash-title" variant="h5">Pending Payments</Typography>
              <Typography className="dash-data" variant="h5" color="white">
                120 Pendng
              </Typography>
            </CardContent>
          </Card>
          <Card className="dash-card" style={{margin: 10, backgroundColor: '#ff3131', color: '#fff', textAlign: 'center', transition:'0.8s' }}>
            <FontAwesomeIcon className="dash-icon" icon={faTimesCircle} style={{ padding: "0.5rem", marginTop: "0.5rem", backgroundColor: '#ff8686', borderRadius: '100%', width: '2rem', height: '2rem' }} />
            <CardContent>
              <Typography className="dash-title" variant="h5">Total Cancelations</Typography>
              <Typography className="dash-data" variant="h5" color="white">
                120 Canelations
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <h3 className="title text-center mt-2">Events Today </h3>
      <Card
        className="event-card"
        sx={{
          minWidth: "25rem",
          borderRadius: "12px",
          boxShadow: 3,
          marginTop: "1rem"
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Event 1
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 2,
            borderTop: "1px solid #eee",
          }}
        >
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                Saddar, Karachi
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1, alignItems: "center" }}>
              <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                120
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                10:00PM - 11:00PM
              </Typography>
            </Box>
          </div>
        </CardActions>
      </Card>
      <Card
        className="event-card"
        sx={{
          minWidth: "25rem",
          borderRadius: "12px",
          boxShadow: 3,
          marginTop: "1rem"
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Event 2
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 2,
            borderTop: "1px solid #eee",
          }}
        >
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                Saddar, Karachi
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1, alignItems: "center" }}>
              <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                120
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                10:00PM - 11:00PM
              </Typography>
            </Box>
          </div>
        </CardActions>
      </Card>
      <Card
        className="event-card"
        sx={{
          minWidth: "25rem",
          borderRadius: "12px",
          boxShadow: 3,
          marginTop: "1rem"
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Event 3
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 2,
            borderTop: "1px solid #eee",
          }}
        >
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                Saddar, Karachi
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1, alignItems: "center" }}>
              <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                120
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: 8, color: "grey" }} />
              <Typography variant="body1" color="text.secondary">
                10:00PM - 11:00PM
              </Typography>
            </Box>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default Dashboard;
