import { View, Text, TextInput, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const navigate = useNavigation()
    return (
        <View className="flex-1 justify-around bg-orange-400">
            <Text className="text-2xl font-bold">Olá Mundo!</Text>
            <Text>Outro texto</Text>
        </View>
    )
}