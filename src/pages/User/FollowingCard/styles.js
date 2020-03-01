import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-top: 2px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Image = styled.Image`  
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;