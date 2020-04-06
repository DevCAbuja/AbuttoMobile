import React from 'react';

import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function TriangleSvg({size = 1}) {
  return (
    <Svg
      width={scale(176 * size)}
      height={scale(165 * size)}
      viewBox="0 0 176 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.95172 150.543V57.0608C1.95172 49.4209 10.172 44.6028 16.8378 48.3357L116.613 104.21C124.031 108.365 123.199 119.298 115.243 122.297L15.4848 159.898C8.94471 162.364 1.95172 157.533 1.95172 150.543Z"
        fill="#3750B2"
      />
      <Path
        d="M45.2252 147.226L5.40691 53.1703C3.00494 47.4966 7.85638 41.9099 14.1363 43.1179L138.412 67.0252C145.25 68.3408 147.961 76.4574 142.958 80.6131L58.5204 150.746C54.3235 154.231 47.4193 152.409 45.2252 147.226Z"
        fill="#3750B2"
        fillOpacity="0.5"
      />
    </Svg>
  );
}
