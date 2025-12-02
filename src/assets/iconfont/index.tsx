/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconDianzan from './IconDianzan';
import IconDianzan1 from './IconDianzan1';
import IconGuolv from './IconGuolv';
export { default as IconDianzan } from './IconDianzan';
export { default as IconDianzan1 } from './IconDianzan1';
export { default as IconGuolv } from './IconGuolv';

export type IconNames = 'icon-dianzan' | 'icon-dianzan1' | 'icon-guolv';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-dianzan':
      return <IconDianzan key="1" {...rest} />;
    case 'icon-dianzan1':
      return <IconDianzan1 key="2" {...rest} />;
    case 'icon-guolv':
      return <IconGuolv key="3" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
