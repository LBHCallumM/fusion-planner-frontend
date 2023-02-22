interface Props {
    name: string;
    label: string;
    value: string;
    handleOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ name, label, value, handleOnInput }: Props) => {
    return (
        <div className="flex flex-col max-w-md mt-4">
        <label htmlFor={name} className="text-lg mb-1">{label}</label>
        <input type="text" name={name} id={name} 
        
        className="border-solid border-gray-800 border-2 p-2 rounded-sm" 
            value={value}
            onInput={handleOnInput}
        />
    </div>
    )
}

export default TextInput