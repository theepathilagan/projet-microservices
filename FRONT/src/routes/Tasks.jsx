import React, { useEffect, useState } from 'react';

const Tasks = () => {
	const [tasks, setTasks] = useState([])
	const [toDo, setToDo] = useState("")

	useEffect(() => {
		fetch(import.meta.env.VITE_API + "get")
			.then(response => response.json())
			.then(data => setTasks(data))
	})

	async function handleSubmit(event) {
		event.preventDefault();
		if (toDo != "") {
			await fetch(import.meta.env.VITE_API + "save", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					"toDo": toDo
				}),
			});
			setToDo("")
		} else {
			alert(`Veuillez entrez une tache`)
		}
	}

	return (
		<div className="flex flex-col items-center h-screen bg-orange-300">
			<h1 className="text-4xl font-bold mb-8">Page des Tâches</h1>
			<form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly w-96 h-16 mt-3 bg-violet-300">
				<input className="w-2/3 h-1/3" type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} />
				<button className="w-20 h-7 rounded-lg items-center bg-orange-300">Ajouter</button>
			</form>
			{
				tasks.map((task) => {
					return (
						<div key={task._id} className="flex flex-row items-center w-96 h-16 mt-3 bg-violet-300">
							<input className="ml-3" type="checkbox" />
							<h2 className="ml-3">{task.toDo}</h2>
						</div>
					)
				})
			}
		</div>
	);
};

export default Tasks;
