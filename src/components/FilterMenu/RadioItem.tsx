import { Radio, RadioGroup } from "@mui/joy";
import { FC } from "react";

interface RadioItemProps {
  options: { id: number; label: string; isChecked?: boolean }[];
  filterName: string;
}
const RadioItem: FC<RadioItemProps> = ({ options, filterName }) => {
  const onFilterChange = (filterName: string, value: string) => {
    console.log(`Filter changed: ${filterName} -> ${value}`);
  };
  const handleRadioChange =
    (filterName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilterChange(filterName, event.target.value);
    };

  return (
    <RadioGroup name={filterName} onChange={handleRadioChange(filterName)}>
      {options.map((option) => (
        <Radio
          key={option.id}
          value={option.toString()}
          label={option.toString()}
        />
      ))}
    </RadioGroup>
  );
};
export default RadioItem;
