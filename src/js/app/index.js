import moment from "moment";
import "moment/locale/es";
moment.locale('es')

function encodeJson (obj) {
	return btoa(JSON.stringify(obj))
}

function decodeJson (obj) {
	return JSON.parse(atob(obj));
}

function diffSegundos (hasta) {
	const hoy = moment();
	const luego = moment(hasta);
	return hoy.diff(luego, "seconds")
}

function diffDias (hasta) {
	const hoy = moment();
	const luego = moment(hasta);
	return hoy.diff(luego, "days")
}

function tiempoTranscurrido (hasta) {
	const hoy = moment();
	const luego = moment(hasta);
	return hoy.fromNow(luego, "days")
}

function convertirFecha (fecha) {
	return moment(fecha).format('MM/DD/YYYY');
}

export {
	diffSegundos, diffDias, tiempoTranscurrido,
	decodeJson,encodeJson,convertirFecha
}