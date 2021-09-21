import Coords from "./type.coords"
import EditInfo from "./type.editInfo"
import User from "./type.user"

type Image = {
	_id: string
	url: string
	pos: Coords
	scale: {
		x: number
		y: number
	}
	editInfo: EditInfo
	author: User
	comments: [Comment]
}

export default Image
