import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
	try {
		const { data: users } = await axios.get(`${ENDPOINT}/users/${userId}`);
		const { data: posts } = await axios.get(
			`${ENDPOINT}/posts?userId=${userId}`
		);

		return { users, posts };
	} catch (error) {
		console.log(error);
	}
}

export default getData;
