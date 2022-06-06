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

export type TypographyMargin = string | undefined;
export type TypographyFontSize = string | undefined;
export type TypographyTextAlign = string | undefined;

export type TypographyProps = {
  component?: TypographyComponent;
  margin?: TypographyMargin;
  fontSize?: TypographyFontSize;
  color?: keyof typeof theme.colors;
  textAlign?: TypographyTextAlign;
};
