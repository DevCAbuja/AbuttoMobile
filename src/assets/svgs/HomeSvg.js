import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function HomeSvg({size = 1, color}) {
  return (
    <Svg
      width={scale(size * 30)}
      height={scale(size * 26)}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.00488281 13.966L14.5882 0.841003L29.1716 13.966H24.7966V25.6327H16.0466V16.8827H13.1299V25.6327H4.37988V13.966H0.00488281ZM21.8799 11.3264L14.5882 4.76392L7.29653 11.3264V22.716H10.2132V13.966H18.9632V22.716H21.8799V11.3264Z"
        fill={color || '#3750B2'}
        fillOpacity="0.7"
      />
    </Svg>
  );
}
