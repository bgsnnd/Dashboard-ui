"use client";

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from 'react';



const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    useEffect(() => {
        moment.locale('en'); // ✅ Set locale hanya di client
    }, []);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                style={{ height: 500 }}
                onView={handleOnChangeView}
            />
        </div>
    );
};

export default BigCalendar;
