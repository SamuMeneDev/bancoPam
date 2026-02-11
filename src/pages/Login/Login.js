import { View, Text, TextInput, Image } from "react-native";
import styles from "../Cadastro/styles";

export default function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.h1}>Login</Text>
                <Image source={require('bootstrap-icons/icons/bank2.svg')} style={styles.banner} />
            </View>
            <View>
                <TextInput placeholder="Digite seu email" />
            </View>
        </View>
    )
}