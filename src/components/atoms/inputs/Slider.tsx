import { Slider as MuiSlider } from '@mui/material';

interface SliderProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-valuetext'?: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: Array<number> | number;
  disabled?: boolean;
  disableSwap?: boolean;
  getAriaLabel?: (index: number) => string;
  getAriaValueText?: (value: number, index: number) => string;
  marks?: Array<{ label?: React.ReactNode; value: number }> | boolean;
  max?: number;
  min?: number;
  name?: string;
  onChange?: (event: Event, value: number | Array<unknown>, activeThumb: number) => void;
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | Array<unknown>) => unknown;
  orientation?: 'horizontal' | 'vertical';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scale?: (x: unknown) => any;
  shiftStep?: number;
  size?: 'small' | 'medium';
  slotProps?: object;
  slots?: object;
  step?: number;
  sx?: React.CSSProperties;
  tabIndex?: number;
  track?: 'inverted' | 'normal';
  value?: Array<number> | number;
  valueLabelDisplay?: 'auto' | 'off' | 'on';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueLabelFormat?: () => any | string;
}

export const Slider: React.FC<SliderProps> = (props) => {
  const { ...rest } = props;
  return <MuiSlider {...rest} />;
};
