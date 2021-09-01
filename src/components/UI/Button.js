import styles from './Button.module.css'

const Button = props => {
	return (
		<button type='submit' className={styles.button}>Add user</button>
	)
}

export default Button