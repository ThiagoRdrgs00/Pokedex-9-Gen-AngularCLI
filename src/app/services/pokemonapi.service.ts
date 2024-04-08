import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {
  PokemonList = [
    { name: "Bulbassour", number: MontaNumero(1) },
    { name: "Ivyssour", number: MontaNumero(2) },
    { name: "Venossour", number: MontaNumero(3) },
    { name: "Charmander", number: MontaNumero(4) },
    { name: "Charmeleon", number: MontaNumero(5) },
    { name: "Charizard", number: MontaNumero(6) },
    { name: "Squirtle", number: MontaNumero(7) },
    { name: "Pikachu", number: MontaNumero(25) },
    { name: "Raichu", number: MontaNumero(26) },
    { name: "Raichu", number: MontaNumero(999) },
    { name: "Koraidon", number: MontaNumero(1007) }
  ]
  
  constructor() { }
}

function MontaNumero(numero) {
  let numeroConvertido = numero;
    if (numero < 10) {
      numeroConvertido = ('000' + numero).slice(-2);
    } else if (numero < 100) {
      numeroConvertido = ('00' + numero).slice(-3);
    } else if (numero < 1000) {
      numeroConvertido = ('0' + numero).slice(-3);
    } else {
      numeroConvertido = (('0000' + numero).slice(-4)).replace(",","");
    }

    return numeroConvertido;
}
