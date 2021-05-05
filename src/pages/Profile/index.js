import React, {useContext} from "react";
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import { AuthContext } from '../../contexts/auth';


import {
  Container,
  Logo,
  Nome,
  NomeText,
  NewLink,
  NewLinkText,
  Logout,
  LogoutText,
} from "./styles";


export default function Profile() {
    const navigation = useNavigation();
    const { user, signOut} = useContext(AuthContext);

  return (
    <Container>
      <Header/>
      <Logo source={require("../../assets/Logo4.png")} />
      <Nome>
        <NomeText>Olá </NomeText>
        <NomeText style={{fontWeight: 'bold'}}>{user && user.nome}</NomeText>
      </Nome>
      <NewLink onPress ={() => navigation.navigate('Novo') }>
        <NewLinkText>Registrar Gastos</NewLinkText>
      </NewLink>
      <Logout onPress ={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}
