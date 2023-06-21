import { Label, Textarea, TextInput } from 'flowbite-react';

const Input = ({ data, handleChange, name, label, error }) => {
  if (error == '') {
    return (
      <div>
        <div className="mb-2 block">
          <Label htmlFor={name} value={label} />
        </div>
        <TextInput
          id={name}
          sizing="md"
          name={name}
          type="text"
          value={data}
          onChange={handleChange}
        />
      </div>
    );
  }
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} color="failure" />
      </div>
      <TextInput
        id={name}
        sizing="md"
        name={name}
        type="text"
        value={data}
        onChange={handleChange}
        color={'failure'}
        helperText={<span className="font-medium">{error}</span>}
      />
    </div>
  );
};
const TextArea = ({ data, handleChange, name, label, error }) => {
  if (error == '') {
    return (
      <div className="max-w-full" id="textarea">
        <div className="mb-2 block">
          <Label htmlFor={name} value={label} />
        </div>
        <Textarea
          id={name}
          name={name}
          placeholder="Masukan deskripsi..."
          rows={10}
          className="w-full"
          value={data}
          onChange={handleChange}
        />
      </div>
    );
  }
  return (
    <div className="max-w-full" id="textarea">
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} color={'failure'} />
      </div>
      <Textarea
        id={name}
        name={name}
        placeholder="Masukan deskripsi..."
        rows={10}
        className="w-full"
        value={data}
        onChange={handleChange}
        color="failure"
        helperText={<span className="font-medium">{error}</span>}
      />
    </div>
  );
};

export { Input, TextArea };
