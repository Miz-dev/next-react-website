import Logo from "./Logo";
import styles from "../styles/footer.module.css";
import Container from "./container";
import Social from "./Social";

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<Container>
				<div className={styles.flexContainer}>
					<Logo />
					<Social />
				</div>
			</Container>
		</footer>
	);
}
