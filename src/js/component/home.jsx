import React from "react";
import { Todo } from "./todo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Todo />
		</div>
	);
};

export default Home;
