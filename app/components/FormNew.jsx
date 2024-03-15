"use client";
import serverAction from "@/app/actions/form";
const FormNew = () => {
	return (
		<>
			<form	
				
				action={(e)=>serverAction(e)}
				className="flex flex-col items-center justify-between p-24"
			>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="username"
					className="border-red"
					required
					placeholder="Write Username"
				/>

				<button> Submit</button>
			</form>
		</>
	);
};

export default FormNew;
