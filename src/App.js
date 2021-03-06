import './App.css';
import TFLServices from './Pages/TFLServices';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudMoon, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


export const registerIcons = () => {
  library.add(faCloudMoon, faCheckCircle, faExclamationCircle)
}

registerIcons()

function App() {
  return (
    <div className="App">
      <h1>TFL Service Lookup</h1>
      <TFLServices />
    </div>
  );
}

export default App;
