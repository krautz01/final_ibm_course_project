import React from 'react';

const CurrentDate = () => {
  const today = new Date();
  const date = today.toLocaleDateString(); // This will format the date according to your locale settings

  return (
    <div>
      {date}
    </div>
  );
};

export default CurrentDate;