import React, { FC } from 'react';

type CitySelectParam = {
  sortType: string;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const sortList = [
  { label: '排序方式', value: '' },
  { label: '報酬由高至低', value: 'desc' },
  { label: '報酬由低至高', value: 'asc' },
];
const SortSelect: FC<CitySelectParam> = ({
  sortType,
  handleSortChange,
}: CitySelectParam) => {
  return (
    <select value={sortType} name="" id="" onChange={handleSortChange}>
      {sortList.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
