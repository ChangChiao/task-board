import { FC, useEffect } from 'react';

import flatpickr from 'flatpickr';

const TaskAddPop: FC = () => {
  useEffect(() => {
    flatpickr('#calendar', {});
  }, []);
  return (
    <div>
      <div id="calendar"></div>
    </div>
  );
};

export default TaskAddPop;
