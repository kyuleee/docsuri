import "./Lines.css";
const Lines = () => {
  return (
    <>
      <svg
      className="linesWrap"
        width="250"
        height="250"
        viewBox="-5 -5 261 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="centerLine lines"
          d="M3.99609 127.953H253"
          strokeLinecap="round"
        />
        <path
          className="centersLine lines"
          d="M3.99609 127.952C3.99609 127.952 190.749 127.952 190.749 3.94849"
          strokeLinecap="round"
        />
        <path
          className="centersLine2 lines"
          d="M3 127.952C3 127.952 190.749 127.952 190.749 252.454"
          strokeLinecap="round"
        />
        <path
          className="secondLine lines"
          d="M126.506 96.0798C126.506 96.0798 126.506 3.45037 3 3.45037"
          strokeLinecap="round"
        />
        <path
          className="thirdLine lines"
          d="M190.251 127.953L190.251 186.718"
          strokeLinecap="round"
        />
        <path
          className="thirdLine lines"
          d="M249.016 156.837L190.251 156.837"
          strokeLinecap="round"
        />
        <path
          className="thirdLine lines"
          d="M190.888 31.9126C190.888 31.9126 245.669 31.9126 245.669 4.02417"
          strokeLinecap="round"
        />
        <path
          className="thirdLine lines"
          d="M221.127 186.717L221.127 156.837"
          strokeLinecap="round"
        />
        <path
          className="fourthLine lines"
          d="M152.402 173.769L152.402 252.455"
          strokeLinecap="round"
        />
        <path
          className="fifthLine  lines"
          d="M221.127 98.072H189.255"
          strokeLinecap="round"
        />
        <path
          className="sixthLine  lines"
          d="M221.127 69.1875L221.127 127.952"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export {Lines};
