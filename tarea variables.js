const miComidaPreferida = {
	nombre: 'Pizza',
	cantidadDeVecesQueComi: 1000,
	cantidadDeVecesQueMeCocinaron: 500,
	ingredientes: [
		'Harina', 
		'Aceite', 
		'Sal', 
		'Agua', 
		'Levadura', 
		'Salsa', 
		'Queso'
	],

}

miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5

miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron
