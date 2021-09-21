import Coords from "./type.coords"
import EditInfo from "./type.editInfo"
import User from "./type.user"

type IText = {
	_id: string
	text: string
	pos: Coords
	editInfo: EditInfo
	author: User
	comments: [Comment]
}

export default IText
