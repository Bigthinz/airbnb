import React, {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';


const Calender = () => {

    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges:any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  return (
    <div>
         {/* <DateRangePicker
        ranges={[selectionRange]}
        rangeColors={['#fd5b61']}
        onChange={handleSelect}
      /> */}
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={[selectionRange]}
        rangeColors={['#fd5b61']}
        months={2}
        direction="horizontal"

/>
    </div>
  )
}

export default Calender