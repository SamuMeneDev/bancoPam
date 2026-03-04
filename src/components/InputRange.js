import { TextInput } from "react-native-web"

export default function InputRange({ placeholder, maxLength, value, setValue }) {
    return (
        <TextInput
            keyboardType="number-pad"
            maxLength={maxLength}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            className="w-[20%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
        />
    )
    
}