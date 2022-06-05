export const validateUserName = (value: string): string => {
  if (!value?.trim()) {
    return 'Name is required';
  }

  const regexAlphabetical = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;

  if (!regexAlphabetical.test(value)) {
    return 'Only alphabetical characters are accepted';
  }

  const regexFullName = /\w+\s+\w/;

  if (!regexFullName.test(value)) {
    return 'Full name is required';
  }

  return '';
};
