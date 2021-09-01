import UserOutputItem from './UserOutputItem';
import styles from './UserOutputSection.module.css'

const UserOutputSection = props => {
	return (
			<ul className={(Object.keys(props.data).length > 1) ? styles.userInfoList : styles.hide}>
				{props.data.map(element => {
						if(element.name) {
							return <UserOutputItem
									key={element.key}
									name={element.name}
									age={element.age}
								/>
						} else {
							return null;
						}
					})}
			</ul>
	);
};

export default UserOutputSection;