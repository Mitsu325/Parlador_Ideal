import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-width: 2px;
  border-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #e51a13;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #4b3621;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Mulish-Regular';
  color: #fff;
  font-size: 18px;
  margin-left: 8px;
`;
