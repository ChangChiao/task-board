import { FC, useEffect } from 'react';

import flatpickr from 'flatpickr';

import { usePopupContext } from '../../hooks/usePopupContext';
// eslint-disable-next-line import/no-cycle
import PopupTemplate from './PopupTemplate';

const TaskAddPop: FC = () => {
  const { isPopupShow } = usePopupContext();
  useEffect(() => {
    flatpickr('#calendar', {});
  }, []);
  return (
    <>
      {isPopupShow && (
        <PopupTemplate>
          <div id="calendar"></div>
        </PopupTemplate>
      )}
    </>
  );
};

export default TaskAddPop;
