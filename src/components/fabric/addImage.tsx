import Coordinates from "../../types/coordinates"
import { fabric } from "fabric"
import testImage from "./testImage"

const addImageURL = async (
	canvas: fabric.Canvas,
	url: string,
	position: Coordinates,
	_id?: string | undefined,
	fromBackend?: boolean
) => {
	// Check URL
	console.log(url)

	try {
		await testImage(url)

		fabric.Image.fromURL(
			url,
			(img) => {
				// Add Functions
				img.scale(0.5)

				// @ts-expect-error
				img._id = _id

				// Moved
				img.on("moved", (opt) => {
					if (opt.target) {
						var x = opt.target.left
						var y = opt.target.top
						console.log(`Image move pX: ${x}, pY: ${y}`)
						console.log("TODO Send update to backend...")
					}
				})

				// Scaled
				img.on("scaled", (opt) => {
					if (opt.target) {
						var scaleX = opt.target.scaleX
						var scaleY = opt.target.scaleY
						console.log(`Image scale sX: ${scaleX}, sY: ${scaleY}`)
						console.log("TODO Send update to backend...")
					}
				})

				// Mouse Up
				/*
			img.on("mouseup", (opt) => {
				console.log("Image Mouseup")
				console.log(opt)
			})
      */

				// Mousedown
				/*
			img.on("mousedown", (opt) => {
				if (opt.target) {
					var x = opt.target.left as number
					var y = opt.target.top as number

					console.log(`pX: ${x}, pY: ${y}`)

					const scaleX = opt.target.scaleX
					const scaleY = opt.target.scaleY

					console.log(`sX: ${scaleX}, sY: ${scaleY}`)
				}
			})
      */

				// console.log(img)

				// Add to canvas
				canvas.add(img)
			},
			{
				// Options
				left: position.x,
				top: position.y,
			}
		)
	} catch (err) {
		console.log("Image error")
	}
}

export default addImageURL
