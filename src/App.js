import { BrowserRouter } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { router() }
      </BrowserRouter>
    </div>
  ) 
}

export default App
