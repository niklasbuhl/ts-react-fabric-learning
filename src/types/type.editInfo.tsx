import User from "./type.user"

type EditInfo = {
	createdAt: Date
	edited: boolean
	lastEditedAt: Date | undefined
	editedBy: User | undefined
}

export default EditInfo
