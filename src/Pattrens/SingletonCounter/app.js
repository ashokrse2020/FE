//to Run code paste this in app.js file
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