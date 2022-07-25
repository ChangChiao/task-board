import React, { FC } from 'react';

type CitySelectParam = {
  sortType: string;
  setSortType: (value: string) => void;
};
const sortList = [
  { label: '報酬由高至低', value: 'desc' },
  { label: '報酬由低至高', value: 'asc' },
];
const SortSelect: FC<CitySelectParam> = ({
  sortType,
  setSortType,
}: CitySelectParam) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };
  return (
    <select value={sortType} name="" id="" onChange={handleChange}>
      {sortList.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
