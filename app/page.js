import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import FormNew from "./components/FormNew";

export default function Home() {
	console.log("Hello Next is pressed on Server Side testing");

	return (
		<main className="flex flex-col items-center justify-between min-h-screen p-24">
			<FormNew />
		</main>
	);
}
