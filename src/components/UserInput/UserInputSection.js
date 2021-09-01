import Card from '../UI/Card';
import Button from '../UI/Button';
import InputCard from '../UI/InputCard';
import {useState} from 'react';

const UserInputSection = props => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const nameChangeHandler = event => {
		setUserName(event.target.value);
	};

	const ageChangeHandler = event => {
		setUserAge(event.target.value);
	};

	const submitHandler = event => {
		event.preventDefault();

		if (userName.length === 0) {
			props.onReceiveError('name');
			return;
		}

		if(userAge <= 0) {
			props.onReceiveError('age')
			return;
		}

		const userData = {
			key: Math.random(),
			name: userName,
			age: userAge,
		};

		props.onReceiveData(userData);

		setUserAge('');
		setUserName('');
	};


	return (
		<Card>
			<form onSubmit={submitHandler}>
				<InputCard>
					<label>Username</label>
					<input type="text" value={userName} onChange={nameChangeHandler}/>
				</InputCard>
				<InputCard>
					<label>Age (Years)</label>
					<input type="number" value={userAge} onChange={ageChangeHandler}/>
				</InputCard>
				<Button/>
			</form>
		</Card>
	);
};

export default UserInputSection;
