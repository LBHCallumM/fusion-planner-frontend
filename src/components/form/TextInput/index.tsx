interface Props {
  name: string;
  value: string;
  placeholder: string;
  handleOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ name, placeholder, value, handleOnInput }: Props) => {
  return (
    <div className="mt-4">
   
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        className="w-full max-w-md px-2 py-2 rounded-sm border border-solid border-gray-300 block outline-none focus:border-gray-500 placeholder:text-gray-500"
        value={value}
        onInput={handleOnInput}
      />
    </div>
  );
};

export default TextInput;
