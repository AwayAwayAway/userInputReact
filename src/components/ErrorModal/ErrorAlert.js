import styles from './ErrorAlert.module.css';

const ErrorAlert = props => {
	let alertMessage = 'Please enter a valid name and age (non-empty values).';

	if (props.error === 'age') {
		alertMessage = 'Please enter a valid age (>0).';
	}

	const closeErrorHandler = () => {
		props.onReceiveError(false);
	};

	return (
		<div className={styles.error__wrapper}>
			<div className={styles.error__block}>
				<h2 className={styles.error__title}>Invalid Input</h2>
				<p>{alertMessage}</p>
				<button onClick={closeErrorHandler}>Okay</button>
			</div>
		</div>
	);
};

export default ErrorAlert;