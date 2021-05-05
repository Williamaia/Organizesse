import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

const HistoricoList = ({ data }) => {
  return (
    <Container>
      <Tipo>
        <IconView>
          <Icon
            name={data.tipo === "Despesa" ? "arrow-down" : "arrow-up"}
            color={data.tipo === "Despesa" ? "#049301" : "#ff0000"}
            size={20}
          />
          <TipoText>{data.tipo}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>R$ {data.valor}</ValorText>
    </Container>
  );
};

export default HistoricoList;
