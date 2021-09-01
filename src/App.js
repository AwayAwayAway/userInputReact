import UserInputSection from './components/UserInput/UserInputSection';
import UserOutputSection from './components/UserOutput/UserOutputSection';
import ErrorAlert from './components/ErrorModal/ErrorAlert';
import {useState} from 'react';
import './App.css';

function App() {
	const [userData, setUserData] = useState([{}]);
	const [inputError, setInputError] = useState(false);

	const onReceiveDataHandler = data => {
		setUserData((prevData) => {
			return [data, ...prevData];
		});
	};

	const onReceiveErrorHandler = error => {
		setInputError(error);
	}

	const renderAlert = () => {
		if(inputError) {
			return <ErrorAlert error={inputError} onReceiveError={onReceiveErrorHandler} />
		}
	}

	return (
		<div className="App">
			<UserInputSection onReceiveData={onReceiveDataHandler} onReceiveError={onReceiveErrorHandler} />
			<UserOutputSection data={userData} />
			{renderAlert()}
		</div>
	);
}

export default App;
