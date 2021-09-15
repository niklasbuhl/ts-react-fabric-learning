import { ToolContext, Tool } from "./toolContext"
import { useContext } from "react"

export type Props = {}

export const ToolBox: React.FC<Props> = () => {
	const { tool, setTool } = useContext(ToolContext)

	return (
		<div className="d-flex">
			<button
				className="btn button-primary"
				onClick={() => setTool(Tool.NewText)}>
				New Text
			</button>
			<button
				className="btn button-primary"
				onClick={() => setTool(Tool.NewImage)}>
				New Image from URL
			</button>

			<button
				className="btn button-primary"
				disabled={tool === Tool.Draw}
				onClick={() => setTool(Tool.Draw)}>
				Draw
			</button>
			<button
				className="btn button-primary"
				disabled={tool === Tool.Edit}
				onClick={() => setTool(Tool.Edit)}>
				Edit
			</button>
			<button
				className="btn button-primary"
				disabled={tool === Tool.Delete}
				onClick={() => setTool(Tool.Delete)}>
				Delete
			</button>
			<button
				className="btn button-primary"
				onClick={() => setTool(Tool.Refresh)}>
				Refresh
			</button>
			{/* <button
				className="btn button-primary"
				onClick={() => setTool(Tool.SendToBack)}>
				Send to Back
			</button> */}
		</div>
	)
}

export default ToolBox
