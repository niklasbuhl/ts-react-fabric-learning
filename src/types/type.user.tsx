import Role from "../enums/enum.role"

type User = {
	_id: string
	username: string
	role: Role
	loggedIn: boolean
}

export default User
