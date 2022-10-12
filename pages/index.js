import Container from "components/container";
import Hero from "components/Hero";
import Meta from "components/meta";

export default function Home() {
	return (
		<Container>
			<Meta />
			<Hero title="CUBE" subtitle="アウトプットしていくサイトです" imageOn />
		</Container>
	);
}
