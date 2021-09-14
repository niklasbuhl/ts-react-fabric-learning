import { ToolContext, Tool } from "./toolContext"
import { useContext } from "react"

export type Props = {}

export const ToolBox: React.FC<Props> = () => {
	const { tool, setTool } = useContext(ToolContext)

	return (
		<>
			<button onClick={() => setTool(Tool.NewText)}>New Text</button>
			<button onClick={() => setTool(Tool.NewImage)}>New Image from URL</button>

			<button disabled={tool === Tool.Draw} onClick={() => setTool(Tool.Draw)}>
				Draw
			</button>
			<button disabled={tool === Tool.Edit} onClick={() => setTool(Tool.Edit)}>
				Edit
			</button>
			<button
				disabled={tool === Tool.Delete}
				onClick={() => setTool(Tool.Delete)}>
				Delete
			</button>
			<button onClick={() => setTool(Tool.Refresh)}>Refresh</button>
			<button onClick={() => setTool(Tool.SendToBack)}>Send to Back</button>
		</>
	)
}

export default ToolBox
