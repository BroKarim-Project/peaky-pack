import React from 'react';

const getTodayDate = (): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const today = new Date();
  const dayOfWeek = days[today.getDay()];
  const dayOfMonth = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${month}. ${dayOfMonth}, ${dayOfWeek} `;
};

const TodayDate: React.FC = () => {
  return <div className="text-black text-sm">Today: {getTodayDate()}</div>;
};

export default TodayDate;
