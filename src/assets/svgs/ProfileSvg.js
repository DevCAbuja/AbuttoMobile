import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../style';

export default function ProfileSvg({size = 1, color}) {
  return (
    <Svg
      width={scale(size * 28)}
      height={scale(size * 24)}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2206 0.0614014C10.4967 0.0614014 7.48044 2.67182 7.48044 5.89473C7.48044 9.11765 10.4967 11.7281 14.2206 11.7281C17.9446 11.7281 20.9608 9.11765 20.9608 5.89473C20.9608 2.67182 17.9446 0.0614014 14.2206 0.0614014ZM17.5907 5.89473C17.5907 4.29056 16.0742 2.97806 14.2206 2.97806C12.3671 2.97806 10.8505 4.29056 10.8505 5.89473C10.8505 7.4989 12.3671 8.8114 14.2206 8.8114C16.0742 8.8114 17.5907 7.4989 17.5907 5.89473ZM24.3309 19.0197C23.9939 17.9843 18.7703 16.1031 14.2206 16.1031C9.67099 16.1031 4.44734 17.9843 4.11033 19.0343V20.4781H24.3309V19.0197ZM0.740234 19.0197C0.740234 15.1406 9.72154 13.1864 14.2206 13.1864C18.7197 13.1864 27.701 15.1406 27.701 19.0197V23.3947H0.740234V19.0197Z"
        fill="#C4C4C4"
        fillOpacity={color || '0.7'}
      />
    </Svg>
  );
}
