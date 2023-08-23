import axios from "axios";

export default axios.create({
	baseURL: process.env.API_ENDPOINT,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
	},
	// withCredentials: true,
});
