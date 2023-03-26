const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        data-darkreader-inline-bgcolor=""
        data-darkreader-inline-bgimage=""
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          strokeWidth="8"
          stroke="#1d3f72"
          strokeDasharray="50.26548245743669 50.26548245743669"
          fill="none"
          strokeLinecap="round"
          data-darkreader-inline-stroke=""
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;
