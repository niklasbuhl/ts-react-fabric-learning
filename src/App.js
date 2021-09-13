import Canvas from "./components/fabric/canvas"
import ToolContextProvider from "./components/fabric/toolContext"

function App() {
  return (
    <div className="App">
      <ToolContextProvider>
        <Canvas />
      </ToolContextProvider>
    </div>
  )
}

export default App
