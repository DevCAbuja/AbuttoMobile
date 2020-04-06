import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function OceanSvg({size = 1}) {
  return (
    <Svg
      width={scale(380 * size)}
      height={scale(74 * size)}
      viewBox="0 0 375 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M375 74H0V51.2217V28.4435H52.0231C85.3193 28.4435 67.9191 -18.7595 110.549 28.4435C110.549 28.4435 134.393 43.8122 148.844 28.4435C163.295 13.0748 187.139 28.4435 187.139 28.4435L231.214 1L261.561 28.4435C261.561 28.4435 284.682 14.7218 312.139 28.4435C312.139 28.4435 348.988 4.29324 375 28.4435V74Z"
        fill="#3750B2"
        stroke="#3750B2"
      />
    </Svg>
  );
}
