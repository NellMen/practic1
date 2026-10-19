import styles from './Shared.module.css';
export function Arrow() {
	return (
		<span className={`${styles.arrow} home-arrow`} aria-hidden='true'>
			↗
		</span>
	);
}

export function Eyebrow({ children }) {
	return <p className={`${styles.eyebrow} home-eyebrow`}>{children}</p>;
}
