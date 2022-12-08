import { styleSet } from '../../../commons/styles/styleSet';

const RequestSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 17 17"
    >
      <path
        fill={styleSet.colors.white}
        d="m0 8 4.9 1.4H5v-.1L12.1 4 11 5.2l-6.2 6.6L5 15l2.9-3.2L10 16l6-16z"
      />
    </svg>
  );
};

export default RequestSvg;
