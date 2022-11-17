import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export const createToken = (user) => {
	const data = {
		_id: user._id,
		email : user.email,
		role: user.role
	}
	return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h'})	
}

export const authVerify = (authToken) => {
	// check user token
	if (typeof authToken !== 'undefined') {
		authToken = authToken.slice(7, authToken.length)

		return jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
			if(err) {
				return null
			}
			else {
				return jwt.decode(authToken, {complete: true}).payload
			}
		})
	}
	else {
		return null
	}
}