import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "pesach brake",
        start: 'february 01, 2022 00:00:00',
        end: 'february 10, 2022 10:00:00',
        yeshivaBrake: false,
    },
    {
        title: "return after pesach",
        start: 'february 10, 2022 00:00:00',
        end: 'march 10, 2022 10:00:00',
        yeshivaBrake: true,
    },
];


const Calender = () => {
  return (
    <>
      <div className="calendarContainer">
      <Calendar
        views={['month']}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
          style={{ zIndex: '1', width: '50%', height: '90%', margin: '60px' }}
        eventPropGetter={(events) => {const backgroundColor = events.yeshivaBrake ? '#ed8146' : '#177e89'; return { style: { backgroundColor } } }}
        />
      </div>
      

      <div className="calendarAgenda">
        {
          events.map((i) => (
            <div>
              <h1>{i.title}</h1>
              <h1>{i.start}</h1>
              <h1>{i.end}</h1>
            </div>
          ))
        }
      </div>
      </>
  )
}

export default Calender