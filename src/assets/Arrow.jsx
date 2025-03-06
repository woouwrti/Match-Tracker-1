const Arrow = ({ width = 16, height = 10, fillColor = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 10"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8L8 1L15 8"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
