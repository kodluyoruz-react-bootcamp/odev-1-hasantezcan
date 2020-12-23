import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
	const { data: users } = await axios.get(`${ENDPOINT}/users/${userId}`);

	console.log(users);
}

export default getData;
