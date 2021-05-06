import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  margin-top: 25px;
  margin-bottom: 15px;
  width: 100px;
  height: 100px;
`;

export const Container = styled.View`
  margin-left: 15px;
  margin-bottom: 25px;
`;

export const Nome = styled.Text`
  font-size: 18px;
  color: #131313;
  font-style: italic;
  font-weight: bold;
`;

export const Saldo = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #131313;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin-left: 15px;
  color: #00b94a;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  marginHozirontal: 15
})`
  padding-top: 12px;
  padding-bottom: 10px;
  background-color: #c0c0c0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 2px;
`;