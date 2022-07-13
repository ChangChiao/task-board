type TabParam = {
  id: string;
  name: string;
};

const Tab = (tabList: Array<TabParam>) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      <ul className="flex flex-wrap -mb-px">
        {tabList.map((item) => {
          return (
            <li className="mr-2" key={item.id}>
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;