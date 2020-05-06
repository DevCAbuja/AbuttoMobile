import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function SearchSvg({size = 1, color}) {
  return (
    <Svg
      width={scale(size * 15)}
      height={scale(size * 15)}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0429 9.43396H10.7204L15 13.7221L13.7221 15L9.43396 10.7204V10.0429L9.2024 9.80274C8.2247 10.6432 6.9554 11.1492 5.57461 11.1492C2.49571 11.1492 0 8.65352 0 5.57461C0 2.49571 2.49571 0 5.57461 0C8.65352 0 11.1492 2.49571 11.1492 5.57461C11.1492 6.9554 10.6432 8.2247 9.80274 9.2024L10.0429 9.43396ZM1.71521 5.57462C1.71521 7.71013 3.43905 9.43397 5.57456 9.43397C7.71006 9.43397 9.43391 7.71013 9.43391 5.57462C9.43391 3.43911 7.71006 1.71527 5.57456 1.71527C3.43905 1.71527 1.71521 3.43911 1.71521 5.57462Z"
        fill={color || '#828282'}
      />
    </Svg>
  );
}
