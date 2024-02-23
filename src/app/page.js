import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<a href="/about" className={styles.code}>
						About page
					</a>
				</p>
				<div></div>
			</div>

			<div className={styles.center}></div>

			<div className={styles.grid}></div>
		</main>
	);
}
