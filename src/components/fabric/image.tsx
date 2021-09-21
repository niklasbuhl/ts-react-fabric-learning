import { fabric } from "fabric"
import testImageURL from "./functions/testImageURL"
import checkViewportBoundaries from "./functions/checkViewportBoundaries"
import Coords from "../../types/type.coords"

const addImageURL = async (
	canvas: fabric.Canvas,
	url: string,
	position: Coords,
	_id?: string | undefined,
	fromBackend?: boolean
) => {
	// Check URL
	console.log(url)

	try {
		await testImageURL(url)

		fabric.Image.fromURL(
			url,
			(img) => {
				// Scale Image to fit inside the canvas
				img.scale(0.5)

				// Add id
				// @ts-expect-error
				img.vwb_id = _id

				// Add Functions

				// Moved
				img.on("moved", () => {
					checkViewportBoundaries(canvas, img)

					const x = img.left
					const y = img.top

					console.log(`Image move pX: ${x}, pY: ${y}`)
					console.log("TODO Send update to backend...")
				})

				// Scaled
				img.on("scaled", () => {
					var scaleX = img.scaleX
					var scaleY = img.scaleY
					console.log(`Image scale sX: ${scaleX}, sY: ${scaleY}`)
					console.log("TODO Send update to backend...")
				})

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
