import styled from 'styled-components';

const StyledTypography = styled.p`
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 16px;
`;

interface Props {
  label?: string;
}

const Typography: React.FC<Props> = ({ label }) => {
  return <StyledTypography>{label}</StyledTypography>;
};

export default Typography;
