import React from "react";
import { Picker as RnPickerSelect } from "@react-native-picker/picker";

import { PikerView } from "./styles";

export default function Picker({ onChange, tipo }) {
  return (
    <PikerView>
      <RnPickerSelect
        style={{
          width: "100%",
        }}
        selectedValue={tipo}
        onValueChange={(valor) => onChange(valor)}
      >
        <RnPickerSelect.Item label="Despesa" value="Despesa" />
        <RnPickerSelect.Item label="Receita" value="Receita" />
      </RnPickerSelect>
    </PikerView>
  );
}
