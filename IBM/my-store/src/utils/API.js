import axios from "axios";

export default {
	//get items by id
	getItem: function(id) {
		return axios.get("/api/items" + id);
	},

	//deletes item by id
	deleteItem: function(id) {
		return axios.delete("/api/items" + id);
	},

	//save item by id
	saveItem: function(id) {
		return axios.post("/api/items" + id);
	}


}