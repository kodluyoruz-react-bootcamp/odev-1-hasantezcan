import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
	const { data: users } = await axios.get(`${ENDPOINT}/users/${userId}`);
	const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userId}`);

	return { users, posts };
}

export default getData;
