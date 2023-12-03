import "./Square.css";
const Square = () => {
  return (
    <>
      <svg
        className="squareWrap"
        width="250"
        height="250"
        viewBox="-5 -5 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="square"
          x="0"
          y="0"
          width="100"
          height="100"
          stroke="#AFF8D8"
        />
      </svg>
    </>
  );
};

export {Square};
