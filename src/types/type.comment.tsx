import EditInfo from "./type.editInfo"
import User from "./type.user"

type Comment = {
	_id: string
	comment: string
	author: User
	editInfo: EditInfo
}

export default Comment
