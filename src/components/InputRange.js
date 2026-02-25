import { TextInput } from "react-native-web"

export default function InputRange({ placeholder, maxLength }) {
    

    function handleInput(value) {
        let semAlfa = value.replace(/[^0-9]/g, '');
    }
    
    return (
        <TextInput
            keyboardType="number-pad"
            maxLength={maxLength}
            placeholder={placeholder}
            className="w-[20%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
        />
    )
    
}