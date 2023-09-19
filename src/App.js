//Source https://github.com/atapas/youtube/tree/main/react/20-useTransition/user-finder-transition
//https://blog.greenroots.info/explain-react-18-usetransition-hook-with-examples

import OnlyOneInstanceCounter from './Pattrens/SingletonCounter';

export default function App(){
  const handleClickForRedButton = () => {
    OnlyOneInstanceCounter.increment();
    console.log("Ashok counter value", OnlyOneInstanceCounter.getCount());
  }

  const handleClickForBlueButton = () => {
    OnlyOneInstanceCounter.increment();
    console.log("Ashok counter value", OnlyOneInstanceCounter.getCount());
  }

  return (
  <div>
    <p>Hello, world!</p>
      <button onClick={handleClickForRedButton}>{'Red Button'}</button>
      <button onClick={handleClickForBlueButton}>{'Blue Button'}</button>
  </div>
  );
}