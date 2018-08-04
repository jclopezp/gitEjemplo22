/*
programa de piedra papel tijera
que pida a dos usuarios, mediante un prompt su decisión para jugar.

La decisión de cada usuario puede ser:
	- piedra
	- papel
	- tijera
Finalmente mostrar con un alert el usuario que gano la partida
*/

let jugador1 = prompt ("J1 - Juguemos! Escoge entre (1)Piedra, (2)Papel o (3) Tijera.")
let jugador2 = prompt ("J2 - Juguemos! Escoge entre (1)Piedra, (2)Papel o (3) Tijera.")

let empate = "Empate"
let gana1 = "Gana Jugador 1"
let gana2 = "Gana Jugador 2"


if (jugador1 == jugador2){
	console.log("empate")
	alert(empate)
}

if (jugador1 == "1" && jugador2 == "2"){
	console.log("Papel gana a piedra. GANA Jugador 2!")
	alert(gana2)
}
if (jugador1 == "1" && jugador2 == "3"){
	console.log("Piedra gana a tijera. GANA Jugador 1")
	alert(gana1)
}


if (jugador1 == "2" && jugador2 == "1"){
	console.log("Papel gana a piedra. GANA Jugador 1!")
	alert(gana1)
}
if (jugador1 == "2" && jugador2 == "3"){
	console.log("Tijera gana a papel. GANA Jugador 2")
	alert(gana2)
}


if (jugador1 == "3" && jugador2 == "1"){
	console.log("Piedra gana a tijera. GANA Jugador 2!")
	alert(gana2)
}
if (jugador1 == "3" && jugador2 == "2"){
	console.log("Tijera gana a papel. GANA Jugador 1")
	alert(gana1)
}
