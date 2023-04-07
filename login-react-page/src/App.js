import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="flex w-full h-screen flex items-center justify-center lg:w-1/2">
      <div>
        <Form />
      </div>
    {/* The hidden origionally hides this div as we don't want it in mobile view but when 
    the screen is large then the display is set to flex so we can see it */}
      <div className="hidden lg:flex h-full bg-gray-200">
        <div>Hello</div>
      </div>
    </div>
  );
}

export default App;
