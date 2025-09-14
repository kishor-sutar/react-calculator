import { useState } from 'react'
import Display from "./components/Display"
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
	let [calVal, setCalVal] = useState("");
	const onButtonClick = (buttonText) => {
		if (buttonText == 'C') {
			setCalVal("")
		} else if (buttonText === '=') {
			try {
				const result = eval(calVal);
				setCalVal(result.toString());   // convert number → string
			} catch (e) {
				setCalVal("Error");
			}

		}
		else if (buttonText === 'Back') {
			setCalVal(calVal.slice(0, -1));

		}




		//'Back'
		else {
			const newDisplayValue = calVal + buttonText
			setCalVal(newDisplayValue)
		}
	}




	return (
		<div className={styles.calculator}>
			<Display displayValue={calVal}></Display>
			<ButtonsContainer
				onButtonClick={onButtonClick}

			></ButtonsContainer>
		</div>
	)
}

export default App



// Using CSS Modules here:
// 1) Rename App.css → App.module.css
// 2) Import with `import styles from './App.module.css'`
// 3) Apply classes as `className={styles.calculator}`
// Why? → This scopes CSS locally to the component and prevents global clashes.

