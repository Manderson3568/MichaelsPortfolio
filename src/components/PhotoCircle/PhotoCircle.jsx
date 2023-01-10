import "./PhotoCircleStyle.css";
function PhotoCircle({
  blueFunction,
  greenFunction,
  redFunction,
  resetFunction,
  image,
}) {
  return (
    <div>
      <div className="circleBox">
        <div className="circle4"></div>
        <div
          className="color blue"
          onClick={() => {
            blueFunction();
          }}
        ></div>
        <div
          className="color red"
          onClick={() => {
            redFunction();
          }}
        ></div>
        <div
          className="color green"
          onClick={() => {
            greenFunction();
          }}
        ></div>
        <div className="circle3"></div>
        <div className="circle2"></div>
        <div className="circle1">
          <img
            src={image}
            alt=""
            onClick={() => {
              resetFunction();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoCircle;
