import Canvas from "./components/fabric/canvas"
import ToolBox from "./components/fabric/toolbox"
import ToolContextProvider from "./components/fabric/toolContext"

function App() {
  return (
    <div className="App">
      <ToolContextProvider>
        <div className="d-flex container flex-column">
          <ToolBox />
          <Canvas />
        </div>
      </ToolContextProvider>
    </div>
  )
}

export default App
