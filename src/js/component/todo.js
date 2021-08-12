import React, { useImperativeHandle, useState } from "react";

export const Todo = () => {
	const [InputValue, setInputValue] = useState("");
	const [todo, setTodo] = useState([]);
	const addTodo = text => {
		var newTodo = [...todo, text];
		setTodo(newTodo);
	};
	const handleKey = event => {
		if (event.key === "Enter") {
			addTodo(InputValue);
			setInputValue("");
		}
	};

	return (
		<div className="container">
			<div className="titlecont">
				<h1 className="title">todos</h1>
			</div>
			<div className="inputcont">
				<input
					onChange={e => setInputValue(e.target.value)}
					type="text"
					placeholder="What needs to be done"
					value={InputValue}
					onKeyPressCapture={e => handleKey(e)}
					className="inp"
				/>
				<ul className="ul1">
					{todo.map((t, key) => (
						<li className="lil" key={key}>
							{t}
							<div className="awe">
								<i
									onClick={() =>
										setTodo(todo.filter(item => t !== item))
									}
									className="fas fa-times fa-xs"></i>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
