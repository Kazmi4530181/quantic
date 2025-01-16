import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faChartBar, faTags, faLocation, faBell, faPlus, faTachometerAlt, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Typography, Avatar } from '@mui/material';
import Report from "./Report.jsx";
import EventCalendar from "./Calendar.jsx";
import User from "./User.jsx";
import Venue from "./Venue.jsx";
import Addon from "./Addon.jsx";
import EventList from './EventList.jsx';
import Dashboard from './Dashboard.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Sidenav.css";

const toggleSideNav = (navOpen, setNavOpen) => {
	if (navOpen) {
		setNavOpen(false);
	}
	else {
		setNavOpen(true);
	}
}

function UserDashboard() {

	const [navOpen, setNavOpen] = useState(true);
	const [activeComponent, setActiveComponent] = useState("dashboard");
	const [activeLink, setActiveLink] = useState("dashboard");
	const notifyInfo = () => toast.info(
		<div className="notification-toast">
			<h4>Notifications</h4>
			<div style={{ backgroundColor: '#f6f6f6', padding: '0.5rem', borderRadius: '10px' }}>Notification 1: Task completed!</div>
			<div style={{ backgroundColor: '#f6f6f6', padding: '0.5rem', borderRadius: '10px', marginTop: '1rem' }}>Notification 2: New message received.</div>
			<div style={{ backgroundColor: '#f6f6f6', padding: '0.5rem', borderRadius: '10px', marginTop: '1rem' }}>Notification 3: System update available.</div>
			<div style={{ backgroundColor: '#f6f6f6', padding: '0.5rem', borderRadius: '10px', marginTop: '1rem' }}>Notification 4: Low disk space warning.</div>
		</div>
	);
	return (
		<>
			<div className="container-flex">
				<div className={navOpen ? "side-nav side-nav-open" : "side-nav side-nav-close"}>
					<div className={navOpen ? "logo py-3 text-center" : 'd-none'}>Booking System</div>
					<ul className={navOpen ? "nav-items text-center" : 'nav-items-hidden'}>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("dashboard"); setActiveLink("dashboard"); }}>
							<div className={activeLink === "dashboard" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"}>
								<FontAwesomeIcon icon={faTachometerAlt} />
								Dashboard
							</div>
						</a>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("chart"); setActiveLink("chart"); }}>
							<div className={activeLink === "chart" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"} >
								<FontAwesomeIcon icon={faChartBar} />
								Reports
							</div>
						</a>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("calendar"); setActiveLink("calendar"); }}>
							<li className={activeLink === "calendar" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"}>
								<FontAwesomeIcon icon={faCalendar} />
								Calendar
							</li>
						</a>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("user"); setActiveLink("user"); }}>
							<li className={activeLink === "user" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"}>
								<FontAwesomeIcon icon={faUsers} />
								Users
							</li>
						</a>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("location"); setActiveLink("location"); }}>
							<li className={activeLink === "location" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"}>
								<FontAwesomeIcon icon={faLocation} />
								Venues
							</li>
						</a>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("price"); setActiveLink("price"); }}>
							<li className={activeLink === "price" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"}>
								<FontAwesomeIcon icon={faTags} />
								Pricing Tiers
							</li>
						</a>
						<a className={navOpen ? "d-block" : "d-none"} href="#" onClick={() => { setActiveComponent("add"); setActiveLink("add"); }}>
							<li className={activeLink === "add" ? "nav-item nav-item-active py-2 px-3" : "nav-item nav-item-inactive py-2 px-3"}>
								<FontAwesomeIcon icon={faPlus} />
								Event
							</li>
						</a>
					</ul>
					<button className={navOpen ? "nav-btn" : "nav-btn nav-btn-small"} onClick={() => toggleSideNav(navOpen, setNavOpen)}>
						{navOpen ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : <FontAwesomeIcon icon={faAngleDoubleRight} />}
					</button>
				</div>
			</div>
			<div className="menu d-flex justify-content-center align-items-center">
				<div className="notification d-flex justify-content-center align-items-center gap-3">
					<button onClick={notifyInfo}>
						<FontAwesomeIcon icon={faBell} />
					</button>
					<div className="d-flex justify-content-center align-items-center gap-2">
						<Avatar alt="John" />
						<Typography variant="body2">John <br />Admin</Typography>
					</div>
					<ToastContainer
						position="top-right"
						width={1100}
						autoClose={false}
						hideProgressBar={false}
						closeOnClick
						pauseOnHover
						draggable
						toastClassName="notification-toast"
					/>
				</div>
			</div>
			<div className="content-container">
				{activeComponent === "dashboard" && <Dashboard />}
				{activeComponent === "chart" && <Report />}
				{activeComponent === "calendar" && <EventCalendar />}
				{activeComponent === "user" && <User />}
				{activeComponent === "location" && <Venue />}
				{activeComponent === "price" && <Addon />}
				{activeComponent === "add" && <EventList />}
			</div>
		</>
	);
}

export default UserDashboard;
