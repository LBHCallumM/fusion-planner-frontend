import { useState } from "react";
import RadioInput from "../RadioInput";

interface Props {
  name: string;
  options: Array<{ label: string; value: string }>;
  handleOnChange: (selectedOption: string) => void;
}

const RadioGroup = ({ name, options, handleOnChange }: Props) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (value: string) => {
    console.log({ value });
    setSelectedOption(value);

    handleOnChange(value)
  };

  return (
    <>
      <div className="flex flex-col mt-2 space-y-2">
        {options.map((option, index) => (
          <RadioInput
            label={option.label}
            value={option.value}
            name={name}
            onChange={handleChange}
            checked={selectedOption === option.value}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
