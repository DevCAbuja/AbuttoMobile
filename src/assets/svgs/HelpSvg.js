import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function HelpSvg({size = 1, color}) {
  return (
    <Svg
      width={scale(size * 27)}
      height={scale(size * 31)}
      viewBox="0 0 27 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.25 3.83332H23.7083C25.3125 3.83332 26.625 5.14582 26.625 6.74999V27.1667C26.625 28.7708 25.3125 30.0833 23.7083 30.0833H3.29167C1.67292 30.0833 0.375 28.7708 0.375 27.1667L0.389583 6.74999C0.389583 5.14582 1.67292 3.83332 3.29167 3.83332H4.75V0.916656H7.66667V3.83332H19.3333V0.916656H22.25V3.83332ZM3.29166 27.1667H23.7083V12.5833H3.29166V27.1667ZM23.7083 9.66666H3.29166V6.74999H23.7083V9.66666ZM20.7917 16.9583H13.5V24.25H20.7917V16.9583Z"
        fill={color || '#C4C4C4'}
      />
    </Svg>
  );
}
