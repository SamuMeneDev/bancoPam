import { useState } from "react";
import { View, Image, Pressable, Text, ScrollView } from "react-native";

export default function Home() {

  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const [saldo,setSaldo] = useState(0);

  function criptoSaldo(valor) {
    const str = valor.toString();
    let rotulo = "";
    for(let i =0; i<str.length; i++) {
      rotulo = rotulo + "*";
    }
    return rotulo+"***";
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.27 }} className="bg-cyan-700 p-3 justify-between">
        <View className="flex-row justify-between items-center">
          <View className="rounded-full p-1 bg-stone-300">
            <Image
              style={{ height: 40, width: 40 }}
              tintColor={"#12837E"}
              source={require("bootstrap-icons/icons/person.svg")}
            />
          </View>
          <View className="flex-row gap-10">
            <Pressable>
              <Image
                tintColor={"#ffffff"}
                style={{ height: 40, width: 40 }}
                source={require("bootstrap-icons/icons/gear.svg")}
              />
            </Pressable>
            <Pressable>
              <Image
                tintColor={"#ffffff"}
                style={{ height: 40, width: 40 }}
                source={require("bootstrap-icons/icons/box-arrow-right.svg")}
              />
            </Pressable>
          </View>
        </View>
        <View style={{ flex: 0.4 }} className="justify-center">
          <Text className="text-white font-light text-4xl">Olá, Fulano</Text>
        </View>
        <View style={{ flex: 0.5 }} className="justify-end">
          <View className="justify-center">
            <Text className="text-white font-light text-base">Saldo atual</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-semibold text-3xl">R$ {mostrarSaldo?saldo.toFixed(2):criptoSaldo(saldo)}</Text>
            <Pressable onPress={()=>setMostrarSaldo(!mostrarSaldo)}>
                <Image style={{height:25, width:25}} tintColor={"#ffffff"} source={mostrarSaldo?require('bootstrap-icons/icons/eye-slash.svg'):require('bootstrap-icons/icons/eye.svg')} />
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row bg-teal-800 p-3 justify-center">
          <Pressable className="rounded-full bg-cyan-600 flex-row items-center p-2">
            <Image style={{width:30, height:30}} tintColor={'#ffffff'} source={require('bootstrap-icons/icons/currency-dollar.svg')} />
            <Text className="text-2xl text-white font-normal">Registrar Movimentação</Text>
          </Pressable>
        </View>
      </View>
      <View style={{flex:0.8}} className="p-3">
        <Text className="text-teal-800 font-light text-4xl">Atividades</Text>
        <ScrollView>

        </ScrollView>
      </View>
    </View>
  );
}
