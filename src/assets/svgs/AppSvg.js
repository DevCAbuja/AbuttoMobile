import React from 'react';
import {Svg, Rect, Path, G} from 'react-native-svg';
import {scale} from '../style';


export const MenuSVG = ({color}) => (
  <Svg
    width={scale(27)}
    height={scale(15)}
    viewBox="0 0 27 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect
      x="4.40816"
      width="21.4898"
      height="2.7551"
      rx="1.37755"
      fill={color || '#E5E5E5'}
    />
    <Rect
      y="6.06128"
      width="21.4898"
      height="2.7551"
      rx="1.37755"
      fill={color || '#E5E5E5'}
    />
    <Rect
      x="5.5102"
      y="12.1224"
      width="21.4898"
      height="2.7551"
      rx="1.37755"
      fill={color || '#E5E5E5'}
    />
  </Svg>
);

export const RightChevronSVG = ({color, size = 1}) => (
  <Svg
    width={scale(18 * size)}
    height={scale(18 * size)}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G id="chevron">
      <Path
        id="chevron_2"
        d="M6.22125 12.4425L9.65625 9L6.22125 5.5575L7.27875 4.5L11.7788 9L7.27875 13.5L6.22125 12.4425Z"
        fill={color || '#F6FEFF'}
      />
    </G>
  </Svg>
);

export const LeftChevronSVG = ({color, size = 1}) => (
  <Svg
    width={scale(18 * size)}
    height={scale(18 * size)}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G id="arrow_back_ios_24px">
      <Path
        id="icon/navigation/arrow_back_ios_24px"
        d="M13.3762 2.90251L12.0412 1.57501L4.62375 9.00001L12.0487 16.425L13.3762 15.0975L7.27875 9.00001L13.3762 2.90251Z"
        fill={color || '#F6FEFF'}
        fillOpacity="0.54"
      />
    </G>
  </Svg>
);
