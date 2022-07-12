import { FC, useState } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { usePopupContext } from '../../hooks/usePopupContext';
// eslint-disable-next-line import/no-cycle
import PopupTemplate from './PopupTemplate';

const TaskAddPop: FC = () => {
  const { isPopupShow } = usePopupContext();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {isPopupShow && (
        <PopupTemplate>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </PopupTemplate>
      )}
    </>
  );
};

export default TaskAddPop;
