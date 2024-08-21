import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';

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
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      className={`flex overflow-x-scroll overflow-y-hidden whitespace-nowrap fixed right-0 top-16 p-3 bg-slate-50 ${
        isMenuOpen ? 'left-52' : 'left-0'
      }`}
    >
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
}

export default ButtonList;
