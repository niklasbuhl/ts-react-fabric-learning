import { fabric } from "fabric"
// import Popup from "reactjs-popup"
// import { Options } from "pretty-format"
import { useContext, useEffect, useState } from "react"
import addImageURL from "./addImage"
// import canvasContext from "./canvasContext"
import addIText from "./addIText"
import { Tool, ToolContext } from "./toolContext"

const Canvas = () => {
	const [canvas, setCanvas] = useState<fabric.Canvas>()
	const { tool, setTool } = useContext(ToolContext)

	// Tool Action
	useEffect(() => {
		console.log(tool)

		if (canvas) {
			switch (tool) {
				// Starting Drawing
				case Tool.Draw:
					canvas.isDrawingMode = true
					return

				// Add New Text
				case Tool.NewText:
					var newText = prompt("Please enter some text.")
					if (newText)
						addIText(canvas, newText, { x: 20, y: 20 }, undefined, false)
					break

				// Add New Image from URL
				case Tool.NewImage:
					var imageURL = prompt("Please enter image URL.")
					console.log(imageURL)

					if (imageURL)
						addImageURL(canvas, imageURL, { x: 200, y: 200 }, undefined, false)

					break

				// Delete Selected
				case Tool.Delete:
					// canvas.dispose()
					var obj = canvas.getActiveObject()
					// console.log(obj)
					if (obj) {
						canvas.remove(obj)
						console.log("TODO Send this information to the backend!")
					} else {
						console.log("No object selected.")
					}
					break

				// Refresh
				case Tool.Refresh:
					// Get all objects on canvas
					var objects = canvas.getObjects()
					console.log(objects)

					// Remove all objects
					for (var objectToDelete of objects) {
						canvas.remove(objectToDelete)
					}

					// Get all objects from server
					console.log("TODO Get all objects from backend...")

					break

				// Send selected object to the back
				case Tool.SendToBack:
					var objectToSendToBack = canvas.getActiveObject()
					if (objectToSendToBack) canvas.sendToBack(objectToSendToBack)
					break

				// Standard Tool Edit
				case Tool.Edit:
				default:
					setTool(Tool.Edit)
					break
			}

			canvas.isDrawingMode = false
		}

		setTool(Tool.Edit)
	}, [tool, setTool, canvas])

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

		var c = initCanvas()

		// Add Mouse Down
		c.on("mouse:down", (options) => {
			// console.log(options.e.clientX, options.e.clientY)

			if (options.target) {
				// console.log("an object was clicked! ", options.target.type)
			}
		})

		c.on("path:created", (opt) => {
			// console.log(opt)

			// @ts-expect-error
			if (opt.path) {
				// Path Array
				// @ts-expect-error
				console.log(opt.path.path)

				console.log("TODO Save new path to backend...")
			}
		})

		// Add Mouse Move

		// Add Mouse Up

		setCanvas(c)
	}, [])

	// Add Text
	useEffect(() => {
		// console.log("Adding Text 2.")

		// Test Items
		if (canvas) {
			// Text
			addIText(
				canvas,
				"Hello Beautiful World",
				{ x: 20, y: 20 },
				"12345678",
				true
			)
			addIText(
				canvas,
				"Zephyr Skateboards",
				{ x: 20, y: 120 },
				"ABCDEFGH",
				true
			)

			// Images
			addImageURL(
				canvas,
				"https://www.pngall.com/wp-content/uploads/2016/07/Sun-Download-PNG.png",
				{ x: 200, y: 200 },
				"nbLogo"
			)

			// Moon
			// https://www.pngall.com/wp-content/uploads/2016/03/Moon-Shining-PNG.png

			// Sun
			// https://www.pngall.com/wp-content/uploads/2016/07/Sun-Download-PNG.png

			// Path
		}
		// if (canvas) addIText(canvas)
		// if (canvas) console.log(canvas.getObjects())
	}, [canvas])

	return <canvas id="canvas"></canvas>
}

export default Canvas
