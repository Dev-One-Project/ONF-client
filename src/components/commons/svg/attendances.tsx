import { styleSet } from "../../../commons/styles/styleSet";

const AttendanceSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 32.782 32.782"
    >
      <path
        fill={styleSet.colors.white}
        d="M6.508 6.508c-5.832 5.832-5.832 15.288 0 21.118s15.288 5.832 21.118 0c5.832-5.832 5.832-15.288 0-21.118-5.832-5.832-15.288-5.832-21.118 0zM25 18h-7.96c-.014 0-.026.008-.04.008a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v9h7a1 1 0 0 1 0 2z"
      />
    </svg>
  );
};

export default AttendanceSvg;
