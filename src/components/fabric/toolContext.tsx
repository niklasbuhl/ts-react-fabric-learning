import React, { createContext, ReactNode, useState } from "react"

export enum Tool {
	Text = "Text",
	Image = "Image",
	Draw = "Draw",
}

export enum ToolAction {
	New = "New",
	Edit = "Edit",
	Delete = "Delete",
	Move = "Move",
}

type ToolContextType = {
	tool: Tool
	setTool: (Tool: Tool) => void
	toolAction: ToolAction
	setToolAction: (ToolAction: ToolAction) => void
}

export const ToolContext = createContext<ToolContextType>({
	tool: Tool.Text,
	setTool: () => {},
	toolAction: ToolAction.New,
	setToolAction: () => {},
})

interface IToolContextProviderProps {
	children: JSX.Element | ReactNode
}

// Tool Selector Context Provider
const ToolContextProvider: React.FC<IToolContextProviderProps> = (props) => {
	const [tool, setTool] = useState<Tool>(Tool.Text)
	const [toolAction, setToolAction] = useState<ToolAction>(ToolAction.New)

	// useEffect(() => {
	// 	console.log("Initialize Tool Context 2")
	// }, [])

	return (
		<ToolContext.Provider value={{ tool, setTool, toolAction, setToolAction }}>
			{props.children}
		</ToolContext.Provider>
	)
}

export default ToolContextProvider
