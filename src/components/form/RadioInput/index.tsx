

interface Props {
    label: string;
    value: string;
    name: string;
    checked: boolean;
    onChange: (name: string) => void;
}

const RadioInput = ({ label, name, value, checked, onChange }: Props ) => {
    return (
        <div>
        <label className="flex">
          <input
            type="radio"
            className="checkbox"
            name={name}
            value={name}
            checked={checked}
            onChange={e => onChange(value)}
          />

          <span className="flex h-10 items-center">{label}</span>
        </label>
      </div>
    )
}

export default RadioInput