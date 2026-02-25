import { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  Switch,
} from "react-native";

export default function ModalRegistro({ visible, setModalVisible }) {
  const [isDespesa, setDespesa] = useState(true);

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View
        style={{ flex: 1, backgroundColor: "rgba(74, 74, 74, 0.5)" }}
        className="p-3 justify-center"
      >
        <View
          style={{ flex: 0.5 }}
          className="border-2 border-stone-500 bg-stone-100 rounded-2xl"
        >
          <View style={{flex:0.13}} className="flex-row">
            <Pressable onPress={() => setModalVisible(false)}>
              <Image
                tintColor={"#0C6363"}
                style={{ width: 40, height: 40 }}
                source={require("bootstrap-icons/icons/x.svg")}
              />
            </Pressable>
            <View className="w-[82%]">
              <Text className="text-center text-2xl font-medium text-cyan-800">
                Registro Financeiro
              </Text>
            </View>
          </View>
          <View style={{flex: 0.13}} className="p-2 justify-center">
            <TextInput
              placeholder="Titulo do Registro"
              className="font-semibold text-teal-800 text-lg border-2 rounded-lg outline-none border-stone-400 p-1"
            />
          </View>
          <View style={{flex:0.1}} className="flex-row items-center justify-center gap-2">
            <View className="flex-row items-center gap-3">
              <Text className="text-teal-800 text-xs">
                {isDespesa ? "Despesa" : "Receita"}
              </Text>
              <Switch
                value={isDespesa}
                onValueChange={setDespesa}
                thumbColor={isDespesa ? "grey" : "#095c3e"}
                trackColor={{ true: "#096B81", false: "#c4c4c4" }}
              />
            </View>
            <View className="flex-row p-2 justify-center border border-stone-400 items-center rounded-md w-[40%]">
              <Text className="text-stone-600 font-semibold flex-nowrap w-[80%]">
                R$ {isDespesa ? "-" : "+"}
              </Text>
              <TextInput
                inputMode="numeric"
                keyboardType="numbers-and-punctuation"
                className="outline-none w-full placeholder:text-stone-500 text-stone-600"
                placeholder="00.00"
              />
            </View>
          </View>
          <View style={{flex:0.35}} className="gap-3 justify-center">
            <View className="flex-row pl-5">
              <Text className="text-cyan-900 text-xl">Data do Registro</Text>
            </View>
            <View className="flex-row justify-around ">
              <TextInput
                keyboardType="number-pad"
                maxLength={2}
                placeholder="DD"
                className="w-[20%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
              />
              <TextInput
                keyboardType="number-pad"
                maxLength={2}
                placeholder="MM"
                className="w-[20%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
              />
              <TextInput
                keyboardType="number-pad"
                maxLength={4}
                placeholder="AAAA"
                className="w-[25%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
              />
            </View>
          </View>
          <View style={{flex:0.2}} className="items-center justify-start">
            <Pressable className="bg-teal-700 border border-teal-800 rounded-lg w-[60%] items-center">
              <Text className="text-white text-xl">Registrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
