import { styleSet } from "../../../commons/styles/styleSet";

const ProfileSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="100%"
      height="100%"
    >
      <circle
        cx="256.1"
        cy="128.6"
        r="128.6"
        fill={styleSet.colors.white}
        transform="rotate(-45.001 256.1 128.604)"
      />
      <path
        fill={styleSet.colors.white}
        d="M403.6,364.5c-9.9-9.9-63.1-61.1-147.5-61.1s-137.7,51.3-147.5,61.1C48.9,424.2,47.5,498.1,47.5,512h417.2   C464.7,498.1,463.3,424.2,403.6,364.5z"
      />
    </svg>
  );
};

export default ProfileSvg;
