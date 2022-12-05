import { styleSet } from "../../../commons/styles/styleSet";

const CompanySvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 15 18"
    >
      <path
        fill={styleSet.colors.white}
        d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1h-2zm-8-4H4V9h2v2zm0-3H4V6h2v2zm0-3H4V3h2v2zm3 6H7V9h2v2zm0-3H7V6h2v2zm0-3H7V3h2v2zm4 6h-2V9h2v2zm0-3h-2V6h2v2z"
      />
    </svg>
  );
};

export default CompanySvg;
