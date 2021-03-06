import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { TouchableWithoutFeedback, Alert } from "react-native";

import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

const HistoricoList = ({ data, deleteItem}) => {
  return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
      <Container>
        <Tipo>
          <IconView>
            <Icon
              name={data.tipo === "Despesa" ? "arrow-down" : "arrow-up"}
              color={data.tipo === "Despesa" ? "#ff0000" : "#049301"}
              size={20}
            />
            <TipoText>{data.tipo}</TipoText>
          </IconView>
        </Tipo>
        <ValorText>R$ {data.valor} </ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default HistoricoList;
