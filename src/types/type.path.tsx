import Coords from "./type.coords"
import EditInfo from "./type.editInfo"
import User from "./type.user"

type Path = {
	_id: string
	pathStr: string
	pos: Coords
	editInfo: EditInfo
	author: User
}

export default Path
