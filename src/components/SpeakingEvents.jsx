import ColouredCircles from "./ColouredCircles";
import roro from "../resources/images/roro.png";

function SpeakingEvents() {
  const speaking = [
    {
      date: "Nov 2022",
      event: "Roro",
      title: "Exorcism",
      link: "#",
      image: roro,
    },
  ];
  return (
    <div>
      <h1>
        <ColouredCircles /> Speaking Events
      </h1>
      {/* <table style={{ width: "90%", margin: "0 auto", overflow: "hidden" }}>
        <tbody> */}
      {speaking.map((event, i) => {
        return (
          <div
            key={`speaking ${i}`}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              fontSize: "32px",
              display: "flex",
            }}
          >
            <div
              style={{
                margin: 0,
                width: "20%",
                display: "table",
              }}
            >
              <p style={{ display: "table-cell", verticalAlign: "middle" }}>
                {event.date}
              </p>
            </div>
            <div
              style={{
                margin: 0,
                width: "30%",
                display: "table",
              }}
            >
              <p style={{ display: "table-cell", verticalAlign: "middle" }}>
                <a href={event.link} style={{ color: "black" }}>
                  {event.event}
                </a>{" "}
                <span style={{ color: "gray" }}>{event.title}</span>
              </p>
            </div>
            <div
              style={{
                margin: 0,
                width: "48%",
                overflow: "hidden",
              }}
            >
              <img src={event.image} alt="Roro photos" />
            </div>
          </div>
        );
      })}
      {/* </tbody>
      </table> */}
    </div>
  );
}
export default SpeakingEvents;
