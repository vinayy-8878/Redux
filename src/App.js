import Header from './Header';
import './App.css';
import Items from './Items';
import {Provider} from 'react-redux'
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <header className="App-header">
        <Items></Items>
        <Header></Header>
        
      </header>
    </div>
    // </Provider>
  );
}

export default App;


//button clicked--->dispatches an action---->calls reducer function---->updates the slice in redux store---->component is subscribed to the store slice with the help of selector 
  //so when button clicked the component directly updates