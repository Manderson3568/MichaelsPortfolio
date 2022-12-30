function ColouredCircles() {
  return (
    <div
      style={{
        display: "inline-block",
        verticalAlign: "top",
        marginRight: "10px",
      }}
    >
      <div
        // className="circles"
        style={{
          display: "flex",
          flexWrap: "wrap",
          // flexDirection: "column-reverse",
          width: "26px",
          height: "78px",
        }}
      >
        <div
          // className="circle"
          style={{
            backgroundColor: "#e6020d",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            margin: "3px",
          }}
        ></div>
        <div
          // className="circle"
          style={{
            backgroundColor: "#3c5aa6",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            margin: "3px",
          }}
        ></div>
        <div
          // className="circle"
          style={{
            backgroundColor: "#32bd0a",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            margin: "3px",
          }}
        ></div>
      </div>
    </div>
  );
}
export default ColouredCircles;
