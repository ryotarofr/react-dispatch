import './App.css'
import { CounterProvider } from './provider/counterProvider'
import CounterComponent from './components/Counter'

function App() {
  return (
    <>
      <CounterProvider>
      <CounterComponent />
    </CounterProvider>
    </>
  )
}

export default App
