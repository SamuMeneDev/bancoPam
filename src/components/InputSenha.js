import { useState } from "react"
import { View, Pressable, Image, TextInput } from "react-native"
import Feather from '@expo/vector-icons/Feather';

export default function InputSenha({ placeholder, onChangeText, value}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
        <View className="gap-2 flex-row border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
          <Feather name="lock" size={24} color="black" />
          <TextInput
            placeholder={placeholder}
            keyboardType="default"
            textContentType="newPassword"
            className="text-xl text-stone-600 font-semibold w-full outline-none"
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={!mostrarSenha}
          />
          <Pressable onPress={()=>setMostrarSenha(!mostrarSenha)}>
          <Feather name={mostrarSenha?'eye-off':'eye'} size={24} color="black" />
          </Pressable>
        </View>
    )
}