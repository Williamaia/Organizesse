import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(0, 0, 0, 0.20)",
})`
  background: rgba(255, 255, 255, 20);
  width: 90%;
  font-size: 17px;
  color: #131313;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 40px;
  width: 90%;
  font-size: 17px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #131313;
`;
