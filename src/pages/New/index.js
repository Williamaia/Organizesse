import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { useNavigation } from '@react-navigation/native'; 
import firebase from "../../services/firebaseConnection";
import { AuthContext } from '../../contexts/auth';
import {format} from 'date-fns';

import Header from "../../components/Header";

import {
  Background,
  Input,
  SubmitButton,
  SubmitText,
  ContainerLogo,
  Logo,
} from "./styles";
import Picker from "../../components/Picker";

export default function New() {
  const navigation = useNavigation();
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(null);
  const { user: usuario } = useContext(AuthContext);

  function handleSubmit() {
    // Verifica se e numero e não é nulo
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert("Preencha todos os campos!");
      return;
    }
    Alert.alert(
      "Confirmando dados",
      `Tipo: ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleAdd(),
        },
      ]
    );
  }

  // Adicionar cadastro no banco 
  async function handleAdd() {
    let uid = usuario.uid;

    // Criar uma key no firebase e seta na variavel
    let key = await firebase.database().ref('historico').child(uid).push().key;

    // Setando valores ao registro
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(key)
      .set({
        tipo: tipo,
        valor: parseFloat(valor),
        data: format(new Date, 'dd/MM/yyyy')
      });

    //Atualizar saldo
    let user = await firebase.database().ref("users").child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);
      tipo === 'Despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);
      user.child('saldo').set(saldo);
    });

    Keyboard.dismiss();
    setValor('');
    navigation.navigate('Início');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <ContainerLogo>
          <Logo source={require("../../assets/Logo5.png")} />
        </ContainerLogo>
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Valor"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          />
          <Picker onChange={setTipo} tipo={tipo} />
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
