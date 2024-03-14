"use server"
const serveraction = async (formData) => {
	const username = formData.get("username");

	console.log(username);

	return {
		success: true,
	};
};

export default serveraction;
