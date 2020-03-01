import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Label = styled.Text`
  
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Column = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 20px;
`;
