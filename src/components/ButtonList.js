import React from 'react';
import Button from './Button';

const buttons = [
  'All',
  'Live',
  'News',
  'Apple',
  'Android',
  'Gaming',
  'Dramedy',
  'Laptops',
  'Cinema',
  'Mobiles',
  'Tech',
  'Musics',
  'Mac',
  'Games',
  'Food',
  'Algorithms',
  'Test',
  'AI',
  'Motivation',
  'DSA',
  'Cars',
  'Bikes',
  'React',
];
function ButtonList() {
  return (
    <div
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      className="flex w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap"
    >
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
}

export default ButtonList;
