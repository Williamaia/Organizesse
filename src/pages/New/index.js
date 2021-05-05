import React, { useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";

import Header from "../../components/Header";

import { Background, Input, SubmitButton, SubmitText, ContainerLogo, Logo } from "./styles";
import Picker from "../../components/Picker";

export default function New() {
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("Receita");
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
          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
