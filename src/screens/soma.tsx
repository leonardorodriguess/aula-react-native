
import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function Soma() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState(0);

  function somar(){
    const soma = Number(valor1) + Number(valor2);
    setResultado(soma);
  }
  
  return (
    <View className="flex-1 items-center justify-center">
      <View className='w-full p-5 gap-4 items-center'>
        <Text className='text-2xl '>Soma</Text>

        <InputCustomizado placeholder="Valor 1" 
          onChangeText={(text) => setValor1(text)}
        />
        <InputCustomizado 
          placeholder="Valor 2" 
          onChangeText={(text) => setValor2(text)}
        />
        <ButtonCustomizado title='Somar' onPress={somar}/>

        <Text className='text-4xl'>Resultado: {resultado} </Text>
      </View>
    </View>
  );
}
