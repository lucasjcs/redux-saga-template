import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: whitesmoke;
`;

export const ListContainer = styled.View`
  margin-top: 100px;
`;

export const TextInput = styled.TextInput`
  padding: 20px;
  background: white;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: #ccc;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: black;
  border-radius: 10px;
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;
