import { fabric } from "fabric"
// import Popup from "reactjs-popup"
// import { Options } from "pretty-format"
import { useContext, useEffect, useState } from "react"
import addImageURL from "./image"
// import canvasContext from "./canvasContext"
import addIText from "./iText"
import editPath, { addPath } from "./path"
import { Tool, ToolContext } from "./toolContext"

const Canvas = () => {
	const [canvas, setCanvas] = useState<fabric.Canvas>()
	const { tool, setTool } = useContext(ToolContext)
	// const { isLoggedIn } = useContext(contextValue)

	// Initialize
	useEffect(() => {
		console.log("Initialize Canvas.")

		const initCanvas = () =>
			new fabric.Canvas("canvas", {
				width: 1296,
				height: 768,
				backgroundColor: "white",
				// isDrawingMode: true,
				selection: false,
				stateful: true,
				selectionBorderColor: "gray",
				selectionColor: "lightgray",
			})

		var c = initCanvas()

		// Path
		c.on("path:created", (opt) => {
			// @ts-expect-error
			if (opt.path) {
				// @ts-expect-error
				editPath(c, opt.path)

				/*
				// @ts-expect-error
				uploadPath(opt.path)
				*/
			}
		})

		setCanvas(c)

		// View Port Boundaries for checking if objects are dragged outside.
		// console.log(c.calcViewportBoundaries())
	}, [])

	// Lock Canvas if not logged in
	/*
	useEffect(() => {

		if(!isLoggedIn) {
			canvas.interactive = false
		} else {
			canvas.interactive = true
		}


	}, [isLoggedIn, canvas])
	*/

	// Tool Action
	useEffect(() => {
		// console.log(tool)

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

	// Add Test Items
	useEffect(() => {
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
			const pathStr =
				"M519.999,112.999,Q520,113,520.5,115.5,Q521,118,521.5,120.5,Q522,123,525.5,136.5,Q529,150,530.5,160,Q532,170,532.5,180,Q533,190,531.5,207.5,Q530,225,525.5,233.5,Q521,242,508.5,259,Q496,276,486.5,287.5,Q477,299,463,317,Q449,335,441.5,341,L433.999,347.001"

			addPath(canvas, pathStr)
		}
		// if (canvas) addIText(canvas)
		// if (canvas) console.log(canvas.getObjects())
	}, [canvas])

	return <canvas className="border border-secondary" id="canvas"></canvas>
}

export default Canvas
