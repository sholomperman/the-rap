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
const time = '24:00'
const events = [
    {
        title: "pesach brake",
        start: 'february 01, 2022',
        end: 'february 10, 2022',
        startHebrew:"5773 ,כח, שוט",
        endHebrew:"5773 ,כח, שוט",
        yeshivaBreak : false,
    },
    {
        title: "return after pesach",
        start: 'february 10, 2022',
        end: 'february 15, 2022',
        startHebrew:"5773 ,כח, שוט",
        endHebrew:"5773 ,כח, שוט",
        yeshivaBreak: true,
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
        style={{ width: '45%', height: '80%', margin: '60px auto' }}
        eventPropGetter={(events) => {const backgroundColor = events.yeshivaBreak ? '#177e89' : '#ed2126'; return { style: { backgroundColor } } }}
        />
      
      
      <div className="calendarAgenda">
        {
          events.map((i) => (
            <div>
              <div className="left">
                {i.yeshivaBreak
                  
                  ?

                  <span
                    style={{ fontSize: '60px',}}
                    className="material-icons-round">school</span>

                  :

                    <span
                    style={{ fontSize: '60px', textAlign: 'center' }}
                    className="material-icons-round">home</span>}
                <h1>{i.title}</h1>
              </div>
              <div className="right">
                <div>
                  <p>{i.start}</p>
                  <p>{i.end}</p>
                </div>
                <div>
                  <p>{i.endHebrew}</p>
                  <p>{i.endHebrew}</p>
                </div>
                </div>
            </div>
          ))
        }
        </div>
      </div>
      </>
  )
}

export default Calender