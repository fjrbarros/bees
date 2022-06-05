import styled, { css } from 'styled-components';
import {
  TypographyComponent,
  TypographyFontSize,
  TypographyMargin,
  TypographyProps,
  TypographyTextAlign,
} from '../../styles/types';

const StyledTypography = styled('p').attrs<TypographyProps>(
  ({ component }) => ({
    as: component,
  }),
)<TypographyProps>`
  ${({ color = 'black' }) => css`
    color: ${props => props.theme.colors[color]};
    margin: ${props => props.margin || 0};
    font-size: ${props => props.fontSize || '14px'};
    text-align: ${props => props.textAlign || 'center'};
  `}
`;

interface Props {
  label?: string;
  component?: TypographyComponent;
  margin?: TypographyMargin;
  fontSize?: TypographyFontSize;
  textAlign?: TypographyTextAlign;
}

const Typography: React.FC<Props> = ({
  label,
  component,
  margin,
  fontSize,
  textAlign,
}) => {
  return (
    <StyledTypography
      component={component}
      margin={margin}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {label}
    </StyledTypography>
  );
};

export default Typography;
