import React from "react";
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import EventList from './EventList.jsx';
import moment from "moment-hijri";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    invoice: "00001",
    title: 'Meeting',
    location: 'XYZ',
    start: new Date(2025, 0, 15, 10, 0),
    end: new Date(2025, 0, 15, 11, 0),
  },
  {
    id: 1,
    invoice: "00002",
    title: 'Meeting',
    location: 'XYZ',
    start: new Date(2025, 0, 15, 12, 0),
    end: new Date(2025, 0, 15, 13, 0),
  },
  {
    id: 1,
    invoice: "00003",
    title: 'Meeting',
    location: 'XYZ',
    start: new Date(2025, 0, 15, 14, 0),
    end: new Date(2025, 0, 15, 15, 0),
  },
  {
    id: 4,
    invoice: "00004",
    title: 'Conference',
    location: 'XYZ',
    start: new Date(2025, 1, 5, 9, 0),
    end: new Date(2025, 1, 5, 9, 0)
  },
];

const eventStyleGetter = (event) => {
  const bgColor = event.id % 2 === 0 ? "#FFF" : "#7ac04f"; 
  const color = event.id % 2 === 0 ? "#7ac04f" : "#FFF"; 
  const style = {
    backgroundColor: bgColor,
    color: color,
    border: 'none',
    padding: '0.5rem',
    fontSize: "1rem",
    textAlign: "center",
    width: "100%",
  };
  return { style };
};

function customEvent({ event }) {

  const startDate = '';
  const endDate = '';
  
  return (
    <row>
      <strong>{event.title}</strong>
    </row>
  );
}

const formatHijriDate = (date) => moment(date).add(-1, "days").format("iMMMM/iDD");

const formatGregorianDate = (date) => moment(date).format("MMM/DD");

function EventCalendar() {
  const [currentView, setCurrentView] = useState("agenda");
  const customViews =  window.innerWidth <= 786 ? ["agenda", "week", "day"] : ["agenda", "week", "day", "month"];
  return (
    <div className="container-flex w-100">
      <div className="content container-flex">
        <Calendar
          localizer={localizer}
          events={events}
          defaultView="agenda"
          views={customViews}
          startAccessor="start"
          endAccessor="end"
          onView={(view) => setCurrentView(view)}
          style={{ height: currentView === "agenda" ? 450 : 650, color: "#7ac04f", transition: "height 0.3s ease-in-out", fontSize: 20 }}
          eventPropGetter={eventStyleGetter}
          components={{
            month: {
              dateHeader: ({ date }) =>{ 
                return (
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{ float: 'left' }}>{formatGregorianDate(date)}</div>
                  <div style={{ float: 'right' }}>{formatHijriDate(date)}</div>
                </div>);
              }
            },
            day: {
              dateHeader: ({ date }) => (
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{ float: 'left' }}>{formatGregorianDate(date)}</div>
                  <div style={{ float: 'right' }}>{formatHijriDate(date)}</div>
                </div>
              )
            },
          }}
          />
        </div>
    </div>
  );
}

export default EventCalendar;

