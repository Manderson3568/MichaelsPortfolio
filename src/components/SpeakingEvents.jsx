import ColouredCircles from "./ColouredCircles";

function SpeakingEvents() {
  const speaking = [
    {
      date: "Nov 2022",
      event: "Roro",
      title: "Exorcism",
      link: "#",
      image: "",
    },
  ];
  return (
    <div>
      <h1 style={{ paddingLeft: "120px" }}>
        <ColouredCircles /> Speaking Events
      </h1>
      <table style={{ width: "90%", margin: "0 auto" }}>
        <tbody>
          {speaking.map((event, i) => {
            return (
              <tr
                key={`speaking ${i}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  height: "120px",
                  textAlign: "center",
                  fontSize: "32px",
                }}
              >
                <td
                  style={{
                    margin: 0,
                    width: "20%",
                  }}
                >
                  {event.date}
                </td>
                <td
                  style={{
                    margin: 0,
                    width: "30%",
                  }}
                >
                  <a href={event.link} style={{ color: "black" }}>
                    {event.event}
                  </a>
                  <span style={{ color: "gray", display: "block" }}>
                    {event.title}
                  </span>
                </td>
                <td
                  style={{
                    margin: 0,
                    width: "48%",
                  }}
                >
                  {event.img}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SpeakingEvents;
