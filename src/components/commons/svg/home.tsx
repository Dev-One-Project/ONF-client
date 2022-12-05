import { styleSet } from "../../../commons/styles/styleSet";

const HomeSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 45 45"
    >
      <path
        fill={styleSet.colors.white}
        d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
};

export default HomeSvg;
