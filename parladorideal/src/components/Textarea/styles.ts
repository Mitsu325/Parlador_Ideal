import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 280px;
  padding: 8px 16px;
  border-width: 2px;
  border-color: #f26763;
  border-radius: 8px;
  margin-bottom: 20px;
  justify-content: flex-start;

  ${props =>
    props.isErrored &&
    css`
      border-color: #e51a13;
      border-width: 3px;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Mulish-Regular';
  color: #474a51;
  font-size: 20px;
`;
