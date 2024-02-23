"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Form from "./Form";
console.log("about");
export default function About() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<Link href="/" className={styles.code}>
						Homepage
					</Link>
				</p>
				<div>ici</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={styles.grid}>
				<Form /> {/* Utilisation du composant de formulaire ici */}
			</div>
		</main>
	);
}
