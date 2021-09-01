import styles from './UserOutputItem.module.css'

const UserOutputItem = props => {
	return (
		<li className={styles.userItem}>{`${props.name} (${props.age} years old)`}</li>
	)
}

export default UserOutputItem