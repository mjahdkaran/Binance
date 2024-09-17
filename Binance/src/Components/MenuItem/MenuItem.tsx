import React from 'react'
import { SvgIconProps } from '@mui/material/SvgIcon';

interface propstype {
  icon: React.ElementType;
  title: string;
  isDarkModeOn: boolean;
}
export default function MenuItem({ icon: IconComponent, title, isDarkModeOn }: propstype) {
  const style = {
    color: isDarkModeOn ? 'var(--disableColor)' : 'var(--darkColor)',
    marginRight: '5px',
  };

  return (
    <li className='left_menu_item'>
      <IconComponent sx={style} />
      {title}
    </li>
  );
}
