import { View, Image, Pressable, Text } from "react-native";

export default function Home() {
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
            <Text className="text-white font-semibold text-3xl">R$ 00,00</Text>
            <Pressable>
                <Image style={{height:25, width:25}} tintColor={"#ffffff"} source={require('bootstrap-icons/icons/eye.svg')} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
