import { fabric } from "fabric"
import Coordinates from "../../types/coordinates"

export const addText = (
	canvas: fabric.Canvas,
	text: string,
	position: Coordinates
) => {
	const t = new fabric.Text(text, {
		left: position.x,
		top: position.y,
	})

	canvas.add(t)
}

export default addText
