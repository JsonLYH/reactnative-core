/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconGuolv: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M875.9 148L629.1 425.4 616 440.2v435.7l-2.2-1.8-2.4-1.5L408 743.4V440.2l-13.1-14.8L148.1 148h727.8m0-52H148.1c-44.4 0-68.4 52.1-39.5 85.8L356 460v283.4c0 17.8 9.1 34.4 24.1 43.9l203.4 129.2c9.9 7.9 21.2 11.5 32.2 11.5 26.9 0 52.2-21.2 52.2-52.1V460l247.4-278.2c29-33.7 5-85.8-39.4-85.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGuolv.defaultProps = {
  size: 18,
};

IconGuolv = React.memo ? React.memo(IconGuolv) : IconGuolv;

export default IconGuolv;
