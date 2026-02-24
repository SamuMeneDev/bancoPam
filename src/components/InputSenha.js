import { useState } from "react"
import { View, Pressable, Image, TextInput } from "react-native"

export default function InputSenha({ placeholder, onChangeText, value}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
        <View className="gap-2 flex-row border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
          <Image
            style={{ height: 30, width: 30 }}
            tintColor={"#12837E"}
            source={require("bootstrap-icons/icons/lock.svg")}
          />
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
            <Image
              style={{height:30, width:30}}
              tintColor={"#12837E"}
              source={mostrarSenha?require("bootstrap-icons/icons/eye-slash-fill.svg"):require("bootstrap-icons/icons/eye-fill.svg")}
            />
          </Pressable>
        </View>
    )
}