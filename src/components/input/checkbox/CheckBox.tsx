import styled from 'styled-components';
import Typography from '../../typography/Typography';

const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  align-items: center;
  margin-bottom: 21px;
`;

const StyledCheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: currentColor;
  width: 16px;
  height: 16px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  border: 1px solid #a1a1aa;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;

  &::before {
    content: '';
    width: 10px;
    height: 8px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ffffff;
  }
  &:checked {
    background-color: #3b82f6;
    border: 1px solid #ffffff;
    cursor: default;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

interface Props {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<Props> = ({ label, checked, onChange }) => {
  return (
    <StyledLabel>
      <StyledCheckBox type="checkbox" checked={checked} onChange={onChange} />
      <Typography component="p" fontSize="14px" label={label} />
    </StyledLabel>
  );
};

export default CheckBox;
