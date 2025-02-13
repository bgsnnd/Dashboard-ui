"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react';

// moment.locale('en');

const localizer = momentLocalizer(moment)

// Filter event hanya antara jam 8:00 pagi hingga 5:00 sore
const filteredEvents = calendarEvents.filter(event => {
    const eventStartHour = event.start.getHours();
    return eventStartHour >= 8 && eventStartHour < 17;
  });

const BigCalendar = () => {
    const[view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    } 

    return(
        <div>
            <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{ height: 900 }}
            onView={handleOnChangeView}
            min={new Date(2026,0,0,8,0,0)}
            max={new Date(2026,0,0,17,0,0)}
            />
        </div>
    );
};

export default BigCalendar;