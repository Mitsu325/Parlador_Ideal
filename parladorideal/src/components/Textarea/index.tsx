import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Textarea: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <TextInput placeholderTextColor="#A9A9A9" {...rest} />
    </Container>
  );
};
export default Textarea;
