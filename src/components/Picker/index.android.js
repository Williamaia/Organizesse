import React from "react";
import RnPickerSelect from "react-native-picker-select";

import { PikerView } from "./styles";

export default function Picker() {
  return (
    <PikerView>
      <RnPickerSelect 
      style={{
          inputAndroid:{
              height: 50,
              padding: 5,
              backgroundColor: '#fff',
              fontSize: 16
          }
      }}
      placeholder={{
          label: 'Tipo',
          color: '#131313',
          value: null
      }}
      onValueChange={}
      items={[
          {label: 'Receita', value: 'Receita', color: '#131313'},
          {label: 'Despesa', value: 'Despesa', color: '#131313'}
      ]}
      
      />
    </PikerView>
  );
}
