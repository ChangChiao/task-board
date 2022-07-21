import React, { FC } from 'react';

import { CITY_LIST } from '../../config';

type CitySelectParam = {
  city: string;
  setCity: (value: string) => void;
};
//
const CitySelect: FC<CitySelectParam> = ({
  city,
  setCity,
}: CitySelectParam) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };
  return (
    <select value={city} name="" id="" onChange={handleChange}>
      {CITY_LIST.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
