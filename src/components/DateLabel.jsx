
const convertDateToString =(dateObj)=>{
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth()+1;
    const day = dateObj.getDate();
    return `${year}-${month}-${day}`
}

function DateLabel({date}) {
    const dateLabel = convertDateToString(date);
  return (
    <span>{dateLabel}</span>
  )
}

export default DateLabel