import Header from "./components/Header"
import Main from './components/Main'

function App() {
  return (
    <div className="flex flex-col min-h-screen select-none bg-slate-50 dark:bg-slate-900 dark:text-slate-50">
      <Header />
      <Main />
    </div>
  )
}

export default App
