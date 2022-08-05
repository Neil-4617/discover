export const getFullname = (firstname, lastname) =>{
	return firstname.concat( ' ', lastname)
} 

export const dateFormat = (date) => {
	return new Date(date).toDateString()
}

export const titleCase = (title) => {
		return title.toLowerCase().split(' ').map((word) => {
		return word.replace(word[0], word[0].toUpperCase());
			}).join(' ');
}