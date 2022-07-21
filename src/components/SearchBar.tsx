import { FC, useState } from 'react';

import { BsChevronDown } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

import CitySelect from './atoms/CitySelect';

const SearchBar: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearchText(newValue);
  };
  return (
    <form>
      <div className="flex w-[600px] mx-auto mt-10">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
          type="button"
        >
          All categories
          <BsChevronDown />
        </button>
        <select>
          <option value=""></option>
        </select>
        <div className="relative w-full">
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <FiSearch />
          </button>
        </div>
        <CitySelect city={city} setCity={setCity} />
      </div>
    </form>
  );
};

export default SearchBar;
