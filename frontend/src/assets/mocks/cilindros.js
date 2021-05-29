import { useState, useEffect } from "react";

const NUMEROS = '1234567890'
const TAMANIOSERIAL = 10
const ESTABLECIMIENTOS = ['Llenador', 'Trasvasador', 'Proveedor', 'Fabricante', 'Adecuador', 'Comercializador']
const TIPOS = ['rojo', 'verde', 'amarillo', 'blanco', 'naranja']
const TIPOGAS = ['Aire', 'Ar', 'He', 'H2', 'N2', 'O2', 'CO2', 'N2O']
const ESTADO = ['Nuevo', 'Usado', 'Readecuados']
const TOTALCILINDROS = 20

const useCilindros = () => {
	const [constantes] = useState({
		numeros: NUMEROS,
		tamanioSerial: TAMANIOSERIAL,
		establecimientos: ESTABLECIMIENTOS,
		tipos: TIPOS,
		tipoGas: TIPOGAS,
		estados: ESTADO,
		total: TOTALCILINDROS,
	})
	const [iterador, setIterador] = useState(1)
	const [cilindros, setCilindros] = useState([])
	
	useEffect(() => {
		const calcularFecha = (comienzo, final) => {
			var fecha = new Date(comienzo.getTime() + Math.random() * (final.getTime() - comienzo.getTime()))
			var dia = String(fecha.getDate()).padStart(2, '0')
			var mes = String(fecha.getMonth() + 1).padStart(2, '0')
			var anio = fecha.getFullYear()
			  	
			return dia + '/' + mes + '/' + anio
		}

		const calcularSerials = () => {
			var numeroAlAzar;
			var serialAlAzar = "";
			for (var i = 0; i < constantes.tamanioSerial; i = i + 1) {
			  numeroAlAzar = Math.floor(Math.random() * constantes.numeros.length)
			  serialAlAzar += constantes.numeros.substring(numeroAlAzar, numeroAlAzar + 1)
			}
			return serialAlAzar;
		}

		const agregarCilindro = () => {
			setCilindros(c => [...c,
				{
			  		serial: calcularSerials(),
			  		fabricante: constantes.establecimientos[Math.floor(Math.random() * constantes.establecimientos.length)],
			  		establecimiento: constantes.establecimientos[Math.floor(Math.random() * constantes.establecimientos.length)],
			  		tipo: constantes.tipos[Math.floor(Math.random() * constantes.tipos.length)],
			  		tipoGas: constantes.tipoGas[Math.floor(Math.random() * constantes.tipoGas.length)],
			  		iram: calcularSerials(),
			  		estado: constantes.estados[Math.floor(Math.random() * constantes.estados.length)],
			  		fabricacion: calcularFecha(new Date(2010, 0, 1), new Date()),
			  		vencimiento:  calcularFecha(new Date(2015, 0, 1), new Date(2025, 0, 1))
				}
			])
		}

		if (iterador <= constantes.total) {
			agregarCilindro()
			setIterador(iterador => iterador + 1)
		}

	}, [iterador, constantes])

	return [cilindros];
}

export default useCilindros;