import { fabric } from "fabric"
import { useEffect, useState } from "react"
// import canvasContext from "./canvasContext"
// import AddText from "./text"

const Canvas = () => {
	const [canvas, setCanvas] = useState<fabric.Canvas>()

	// Initialize
	useEffect(() => {
		console.log("Initialize Canvas.")
		const initCanvas = () =>
			new fabric.Canvas("canvas", {
				height: 800,
				width: 800,
				backgroundColor: "pink",
				// isDrawingMode: true,
				selection: false,
				stateful: true,
			})

		setCanvas(initCanvas())
	}, [setCanvas])

	useEffect(() => {
		if (canvas)
			canvas.on("mouse:down", (options) => {
				console.log(options.e.clientX, options.e.clientY)

				if (options.target) {
					console.log("an object was clicked! ", options.target.type)
				}
			})
		return () => {
			if (canvas) canvas.off("mouse:down")
		}
	}, [canvas])

	// Update Canvas
	// useEffect(() => {
	// 	console.log("Updating Canvas.")
	// 	if (canvas) {
	// 		// setCanvas(canvas.renderAll())
	// 	}
	// }, [canvas, setCanvas]{}
	// Update

	// Add Text
	useEffect(() => {
		console.log("Adding Text 2.")
		// var text = new fabric.Text("Hello, World", { left: 100, top: 100 })

		// canvas.add(text)

		const addText = (c: fabric.Canvas) => {
			const text = new fabric.Text("Hello World", {
				left: 10,
				top: 10,
			})
			c.add(text)
		}

		const addIText = (c: fabric.Canvas) => {
			const iText = new fabric.IText("Hello Someone", { left: 10, top: 10 })
			c.add(iText)
		}

		// canvas.get
		if (canvas) addText(canvas)
		if (canvas) addIText(canvas)
		if (canvas) console.log(canvas.getObjects())
	}, [canvas])

	// Add Images

	// Add ...

	return <canvas id="canvas"></canvas>
}

export default Canvas
