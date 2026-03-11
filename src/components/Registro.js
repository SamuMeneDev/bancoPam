import {View, Text} from 'react-native';

export default function Registro({ item }) {
    return (
        <View className="border bg-stone-100 border-stone-300 p-2 mb-2 rounded-lg">
            <View>
                <Text className="text-lg font-normal">{item.titulo}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text>Data: {item.data.dia}/{item.data.mes}/{item.data.ano}</Text>
                <Text>{item.valor>=0?'+':'-'} R$ {Math.abs(item.valor)}</Text>
            </View>
        </View>
    )
}