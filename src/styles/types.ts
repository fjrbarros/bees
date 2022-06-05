import { theme } from './Theme';

export type TypographyComponent =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type TypographyMargin = string | number;
export type TypographyFontSize = string | number;
export type TypographyTextAlign = string;

export type TypographyProps = {
  component?: TypographyComponent;
  margin?: TypographyMargin;
  fontSize?: TypographyFontSize;
  color?: keyof typeof theme.colors;
  textAlign?: TypographyTextAlign;
};
