import { useState, useEffect } from "react";

const NUMBERS = '1234567890'
const SERIALSIZE = 10
const ESTABLISHMENTS = ['Llenador', 'Trasvasador', 'Proveedor', 'Fabricante', 'Adecuador', 'Comercializador']
const TYPES = ['rojo', 'verde', 'amarillo', 'blanco', 'naranja']
const GASTYPES = ['Aire', 'Ar', 'He', 'H2', 'N2', 'O2', 'CO2', 'N2O']
const STATES = ['Nuevo', 'Usado', 'Readecuados']
const TOTALCYLINDERS = 20

const useCylinders = () => {
	const [constantValues] = useState({
		numbers: NUMBERS,
		serialSize: SERIALSIZE,
		establishments: ESTABLISHMENTS,
		types: TYPES,
		gasTypes: GASTYPES,
		states: STATES,
		total: TOTALCYLINDERS,
	})
	const [iterated, setIterated] = useState(1)
	const [cylinders, setCylinders] = useState([])
	
	useEffect(() => {
		const calculateDate = (start, end) => {
			var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
			var dd = String(date.getDate()).padStart(2, '0')
			var mm = String(date.getMonth() + 1).padStart(2, '0')
			var yyyy = date.getFullYear()
			  	
			return dd + '/' + mm + '/' + yyyy
		}

		const calculateSerials = () => {
			var randomNumber;
			var randomSerial = "";
			for (var i = 0; i < constantValues.serialSize; i = i + 1) {
			  randomNumber = Math.floor(Math.random() * constantValues.numbers.length)
			  randomSerial += constantValues.numbers.substring(randomNumber, randomNumber + 1)
			}
			return randomSerial;
		}

		const addCylinder = () => {
			setCylinders(c => [...c,
				{
			  		serie: calculateSerials(),
			  		manufacturer: constantValues.establishments[Math.floor(Math.random() * constantValues.establishments.length)],
			  		establishment: constantValues.establishments[Math.floor(Math.random() * constantValues.establishments.length)],
			  		type: constantValues.types[Math.floor(Math.random() * constantValues.types.length)],
			  		gasType: constantValues.gasTypes[Math.floor(Math.random() * constantValues.gasTypes.length)],
			  		iram: calculateSerials(),
			  		state: constantValues.states[Math.floor(Math.random() * constantValues.states.length)],
			  		manufacturing: calculateDate(new Date(2010, 0, 1), new Date()),
			  		maturities:  calculateDate(new Date(2015, 0, 1), new Date(2025, 0, 1))
				}
			])
		}

		if (iterated <= constantValues.total) {
			addCylinder()
			setIterated(iterated => iterated + 1)
		}

	}, [iterated, constantValues])

	return [cylinders];
}

export default useCylinders;