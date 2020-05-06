import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function MenuSvg({size = 1, color}) {
  return (
    <Svg
      width={scale(size * 19)}
      height={scale(size * 16)}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.420227 2.70125V0.601074H18.1012V2.70125H0.420227ZM0.420227 4.80143H18.1012V6.90161H0.420227V4.80143ZM0.420227 13.2021H11.4708V15.3023H0.420227V13.2021ZM0.420227 11.102H18.1012V9.00179H0.420227V11.102Z"
        fill={color || '#333333'}
      />
    </Svg>
  );
}
