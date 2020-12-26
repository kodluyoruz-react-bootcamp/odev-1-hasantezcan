"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
	const { data: users } = await _axios2.default.get(`${ENDPOINT}/users/${userId}`);
	const { data: posts } = await _axios2.default.get(`${ENDPOINT}/posts?userId=${userId}`);

	return { users, posts };
}

exports. default = getData;
