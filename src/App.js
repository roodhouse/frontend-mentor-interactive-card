import './App.css';
import Top from '../src/components/Top'
import Bottom from '../src/components/Bottom'

function App() {
  return (
    <div className="App h-screen">
      <div id='mainWrapper' className='h-full flex justify-center'>
        <div id='mainContainer' className='h-full pb-[45px] max-w-[375px]'>
          <div id='topWrapper'>
            <Top />
          </div>
          <div id='bottomWrapper'>
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
