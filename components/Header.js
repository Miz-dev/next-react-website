import Logo from "./Logo";
import Nav from "./Nav";
import styles from "../styles/header.module.css";

export default function Header() {
	return (
		<header>
			<div className={styles.flexContainer}>
				<Logo boxOn />
				<Nav />
			</div>
		</header>
	);
}
