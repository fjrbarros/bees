import { validateUserName } from './validateUserName';

describe.each`
  value           | expected
  ${''}           | ${'Name is required'}
  ${'          '} | ${'Name is required'}
  ${'abc123'}     | ${'Only alphabetical characters are accepted'}
  ${'abc'}        | ${'Full name is required'}
  ${'valid name'} | ${''}
  ${undefined}    | ${'Name is required'}
`('validateUserName', ({ value, expected }) => {
  it(`should return "${expected}" if argument is "${value}"`, () => {
    expect(validateUserName(value)).toEqual(expected);
  });
});
