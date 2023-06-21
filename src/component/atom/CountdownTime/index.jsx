import React from 'react'
import moment from 'moment';

const CountdownTime = ({ date }) => {
  const convert = (date) => {
    const targetDate = moment(date, 'YYYY-MM-DD HH:mm:ss');
    const currentDate = moment();
    const duration = moment.duration(targetDate.diff(currentDate));
    const months = Math.floor(duration.asMonths());
    return months;
  }
  return (
    date ? <div>{convert(date)} bulan</div> : ""
  )
}

export default CountdownTime