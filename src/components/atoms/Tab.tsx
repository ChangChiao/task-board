import clsx from 'clsx';

type TabItem = {
  id: number;
  name: string;
};

type TabParam = {
  tabList: TabItem[];
  tab: number;
  setTab: (value: number) => void;
  style?: string;
};

const Tab = ({ tabList, setTab, style, tab }: TabParam) => {
  return (
    <div className="mb-6 font-medium text-center text-gray-500 border-b border-gray-500">
      <ul className={clsx('flex flex-wrap -mb-px', style)}>
        {tabList.map((item) => {
          return (
            <li
              className="mr-2"
              key={item.id}
              onClick={() => {
                setTab(item.id);
              }}
            >
              <a
                href="#"
                className={clsx(
                  'tab-item inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-300',
                  tab === item.id && 'active'
                )}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          .tab-item.active {
            @apply text-gray-300 border-gray-300;
          }
        `}
      </style>
    </div>
  );
};

export default Tab;
