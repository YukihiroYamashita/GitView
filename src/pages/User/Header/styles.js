import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #c7c7c7;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 120px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #f7f7f7;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #f7f7f7;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

export const Label = styled.Text`
  color: #f7f7f7;
`;
