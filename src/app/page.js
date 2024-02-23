import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
console.log("home");
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<Link href="/about" className={styles.code}>
						About page
					</Link>
				</p>
				<div></div>
			</div>

			<div className={styles.center}>
				<p>Get started by editing</p>
			</div>

			<div className={styles.grid}>
				<p>Get started by editing</p>
			</div>
		</main>
	);
}
