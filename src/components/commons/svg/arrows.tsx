import { styleSet } from '../../../commons/styles/styleSet';

type ArrowSvgProps = {
  direction: 'left' | 'right' | 'up' | 'down';
  color?: string;
  size: 'small' | 'big';
};

const ArrowSvg = (props: ArrowSvgProps) => {
  const { direction, color, size } = props;
  if (props.direction === 'left') {
    return <ArrowLeft color={color || styleSet.colors.black} size={size} />;
  } else if (direction === 'right') {
    return <ArrowRight color={color || styleSet.colors.black} size={size} />;
  } else if (direction === 'up') {
    return <ArrowUp color={color || styleSet.colors.black} size={size} />;
  } else if (direction === 'down') {
    return <ArrowDown color={color || styleSet.colors.black} size={size} />;
  } else {
    return <></>;
  }
};

const ArrowDown = ({ color, size }: Partial<ArrowSvgProps>) => {
  if (size === 'big') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(-254 -232)">w
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(254 232)"
          />
          <path
            id="angle-down"
            fill={color}
            d="M107.741,10.99l-8.3,8.6a1.318,1.318,0,0,1-1.911,0,1.437,1.437,0,0,1,0-1.981L104.875,10,97.535,2.391a1.437,1.437,0,0,1,0-1.981,1.318,1.318,0,0,1,1.911,0l8.3,8.6a1.436,1.436,0,0,1,0,1.98Z"
            transform="translate(274.5 139.862) rotate(90)"
          />
        </g>
      </svg>
    );
  } else if (size === 'small') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(-244 274) rotate(-90)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(253 244)"
          />
          <g id="angle-left" transform="translate(364.138 260) rotate(180)">
            <path
              fill={color}
              d="M103.732,6.594l-5.16,5.16a.84.84,0,1,1-1.189-1.188L101.95,6,97.385,1.434A.84.84,0,1,1,98.573.246l5.16,5.16a.84.84,0,0,1,0,1.188Z"
            />
          </g>
        </g>
      </svg>
    );
  } else {
    return <></>;
  }
};

const ArrowUp = ({ color, size }: Partial<ArrowSvgProps>) => {
  if (size === 'big') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(275 253) rotate(180)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(254 232)"
          />
          <path
            fill={color}
            d="M107.741,10.99l-8.3,8.6a1.318,1.318,0,0,1-1.911,0,1.437,1.437,0,0,1,0-1.981L104.875,10,97.535,2.391a1.437,1.437,0,0,1,0-1.981,1.318,1.318,0,0,1,1.911,0l8.3,8.6a1.436,1.436,0,0,1,0,1.98Z"
            transform="translate(274.5 139.862) rotate(90)"
          />
        </g>
      </svg>
    );
  } else if (size === 'small') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(265 -253) rotate(90)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(253 244)"
          />
          <g transform="translate(363.979 261) rotate(180)">
            <path
              fill={color}
              d="M103.732,6.594l-5.16,5.16a.84.84,0,1,1-1.189-1.188L101.95,6,97.385,1.434A.84.84,0,1,1,98.573.246l5.16,5.16a.84.84,0,0,1,0,1.188Z"
            />
          </g>
        </g>
      </svg>
    );
  } else {
    return <></>;
  }
};

const ArrowLeft = ({ color, size }: Partial<ArrowSvgProps>) => {
  if (size === 'big') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(-253 -244)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(253 244)"
          />
          <g transform="translate(366.54 264.5) rotate(180)">
            <path
              fill={color}
              d="M108.129,10.99l-8.6,8.6a1.4,1.4,0,1,1-1.981-1.98l7.61-7.61L97.549,2.391A1.4,1.4,0,0,1,99.53.41l8.6,8.6a1.4,1.4,0,0,1,0,1.98Z"
            />
          </g>
        </g>
      </svg>
    );
  } else if (size === 'small') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(-253 -244)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(253 244)"
          />
          <g transform="translate(363.979 261) rotate(180)">
            <path
              fill={color}
              d="M103.732,6.594l-5.16,5.16a.84.84,0,1,1-1.189-1.188L101.95,6,97.385,1.434A.84.84,0,0,1,98.573.246l5.16,5.16a.84.84,0,0,1,0,1.188Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </svg>
    );
  } else {
    return <></>;
  }
};

const ArrowRight = ({ color, size }: Partial<ArrowSvgProps>) => {
  if (size === 'big') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(274 265) rotate(180)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(253 244)"
          />
          <g transform="translate(366.54 264.5) rotate(180)">
            <path
              fill={color}
              d="M108.129,10.99l-8.6,8.6a1.4,1.4,0,1,1-1.981-1.98l7.61-7.61L97.549,2.391A1.4,1.4,0,0,1,99.53.41l8.6,8.6a1.4,1.4,0,0,1,0,1.98Z"
            />
          </g>
        </g>
      </svg>
    );
  } else if (size === 'small') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <g transform="translate(274 265) rotate(180)">
          <rect
            fill="none"
            width="21"
            height="21"
            transform="translate(253 244)"
          />
          <g transform="translate(364.138 260) rotate(180)">
            <path
              fill={color}
              d="M103.732,6.594l-5.16,5.16a.84.84,0,1,1-1.189-1.188L101.95,6,97.385,1.434A.84.84,0,0,1,98.573.246l5.16,5.16a.84.84,0,0,1,0,1.188Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </svg>
    );
  } else {
    return <></>;
  }
};

export default ArrowSvg;
