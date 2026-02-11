import { View, Text, TextInput, Image, Pressable } from "react-native";
import styles from "../Cadastro/styles";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.h1.textCenter}>Login</Text>
                <View style={{backgroundColor: '#ffffff', padding: 20, borderRadius: '50%'}}>
                <Image style={{
     textAlign: 'center', width: 70, height: 70,
                }} source={require("bootstrap-icons/icons/bank2.svg")} />
                </View>
            </View>
            <View style={styles.form}>
               
                <TextInput style={styles.input} placeholder="E-Mail" />
                <TextInput style={styles.input} placeholder="Senha" />
                
                <Pressable style={styles.button}>
                    <Text style={styles.button.text}>Logar</Text>
                </Pressable>

                <View>
                <Pressable onPress={()=>navigate.navigate("Cadastro")}>
                    <Text style={{color: '#f57e42', textAlign: 'center', fontSize: 20}}>Não tem uma conta? Cadastre-se</Text>
                </Pressable>
                </View>
                
            
            </View>
        </View>
    )
}