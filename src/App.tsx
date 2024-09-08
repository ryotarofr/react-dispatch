import './App.css'
import { Skic18001Provider } from './provider/counterProvider'
import CounterComponent from './components/Counter'

function App() {
  return (
    <>
      <Skic18001Provider>
      <CounterComponent />
    </Skic18001Provider>
    </>
  )
}

export default App
