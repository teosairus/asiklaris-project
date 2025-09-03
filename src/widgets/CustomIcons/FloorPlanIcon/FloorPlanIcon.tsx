import { SvgIcon, SvgIconProps } from '@mui/material';

function FloorPlanIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentcolor"
        viewBox="0 0 1024 1024"
      >
        <path d="M896 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h480v-64c0-89.6 70.4-160 160-160v-64c-124.8 0-224 99.2-224 224h-96v-128h-64v128H128V128h256v448h64v-160h128v-64h-128V128h448v224h-128v64h128v480h-128v64h128c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z"></path>
      </svg>
    </SvgIcon>
  );
}

export default FloorPlanIcon;
