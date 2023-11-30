import "./Arrow.css";
const Arrow = () => {
  return (
    <svg
      width="40"
      height="15"
      viewBox="0 0 40 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="arrowLine"
        d="M1 7.5H38.5"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="2px"
      />
      <path
        className="arrowHead"
        d="M32.5 1L39 7.5L32.5 14"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
      />
    </svg>
  );
};

export default Arrow;
