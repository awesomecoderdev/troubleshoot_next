import axios from "axios";

export default axios.create({
	baseURL: "https://api.troubleshoot.com.bd/v1/",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
	},
	withCredentials: true,
});
