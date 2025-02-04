import { Rating as MuiRating } from '@mui/material';

interface RatingProps {
  className?: string;
  component?: React.ElementType;
  defaultValue?: number;
  disabled?: boolean;
  emptyIcon?: React.ReactNode;
  emptyLabelText?: React.ReactNode;
  getLabelText?: (value: number) => string;
  highlightSelectedOnly?: boolean;
  icon?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  IconContainerComponent?: React.ElementType | any;
  max?: number;
  name?: string;
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
  onChangeActive?: (event: React.SyntheticEvent, value: number) => void;
  precision?: number;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
  sx?: React.CSSProperties;
  value?: number;
}

export const Rating: React.FC<RatingProps> = (props) => {
  const { ...rest } = props;

  return <MuiRating {...rest} />;
};
