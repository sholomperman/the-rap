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

const Calender = ({ apiCalender }) => {
  const events = apiCalender?.map((i) => ({
    title: i.title,
    start: i.startEnglish,
    end: i.endEnglish,
    yeshivaBreak: i.yeshivaBreak,
  }));
  console.log(apiCalender);
  return (
    <div className="calendarContainer">
      <Calendar
        views={["month"]}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ width: "45%", height: "80%", margin: "60px auto" }}
        eventPropGetter={(events) => {
          const backgroundColor = events.yeshivaBreak ? "#00851f" : "#854500";
          return { style: { backgroundColor } };
        }}
      />

      <div className="calendarAgenda">
        {apiCalender?.map((i) => (
          <div key={i.id}>
            <div className="left">
              {i.yeshivaBreak ? (
                <span
                  style={{ fontSize: 60, teitAlign: "center" }}
                  className="material-icons-round"
                >
                  home
                </span>
              ) : (
                <span style={{ fontSize: 60 }} className="material-icons-round">
                  school
                </span>
              )}

              <h1>{i.title}</h1>
            </div>
            <div className="right">
              <div>
                <p>{i.startEnglish}</p>

                <p>{i.endEnglish}</p>
              </div>
              {/* <div>
                <p>{i.startingDateInHebrew}</p>
                <p>{i.attributes.endingDateInHebrew}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
