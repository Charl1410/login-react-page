import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="flex w-full h-screen ">
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form />
      </div>
    {/* The hidden origionally hides this div as we don't want it in mobile view but when 
    the screen is large then the display is set to flex so we can see it */}
      <div className="hidden lg:flex h-full w-1/2 bg-gray-200 items-center justify-center ">
        {/* This color styling 'bg-gradient-to-tr from-violet-500 to-pink-500'creates bottom right to top left   */}
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full'></div>
      </div>
    </div>
  );
}

export default App;
