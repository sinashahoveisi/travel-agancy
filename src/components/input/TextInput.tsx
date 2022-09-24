import type {FC} from 'react';
import {Control, useController} from 'react-hook-form';

interface Props {
  control: Control;
  name: string;
  label?: string;
  defaultValue?: string | number | string[];
  type?: 'text' | 'search' | 'number' | 'password' | 'email' | 'tel';
  placeholder?: string;
}

const TextInput: FC<Props> = ({control, name, label, defaultValue, type = 'text', placeholder}) => {
  const {
    field,
    fieldState: {error}
  } = useController({name, control, defaultValue});

  return (
    <div className="form-control w-full">
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <input {...field} id={name} type={type} placeholder={placeholder} className="input input-bordered w-full" />
      {error?.message && (
        <div className="label">
          <span className="label-text-alt text-rose-500">{error?.message}</span>
        </div>
      )}
    </div>
  );
};

export default TextInput;
