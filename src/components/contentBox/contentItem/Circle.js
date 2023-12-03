import "./Circle.css";
const Circle = () => {
  return (
    <>
      <svg
        className="circleWrap"
        width="250"
        height="250"
        viewBox="-5 -5 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="circle" cx="50" cy="50" r="49.5" stroke="#FFB5E8" />
      </svg>
    </>
  );
};

export {Circle};
