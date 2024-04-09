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

function MontaNumero(PokemonID) {
  let PokemonIDConvertido = PokemonID;
  if (PokemonID < 1000) {
    PokemonIDConvertido = ('000' + PokemonID).slice(-3);
  } else {
    PokemonIDConvertido = (('0000' + PokemonID).slice(-4)).replace(",","");
  }

  return PokemonIDConvertido;
}
