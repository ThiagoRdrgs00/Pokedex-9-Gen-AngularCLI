import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PokeInterface{
  created: string,
  modified: string,
  name: string,
  pokemon: any[],
  resource_ari: string
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {
  private pokeURL = '//dev.treinaweb.com.br/pokeapi/';
  PokemonList = [];
  
  constructor(
    private http: HttpClient
  ) { }

  
  listarTodos() {
    this.http.get<PokeInterface>(this.pokeURL + '/pokedex/1')
      .subscribe(response => {
        response.pokemon.forEach(pokemon =>{
          pokemon.number = MontaNumero(this.getID(pokemon.resource_uri));
        })
        this.PokemonList = this.ordenarPokemons(response.pokemon).filter(pokemon => pokemon.number < 1000);
      });
    }

  private getID(url){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  private ordenarPokemons(PokemonList){
    return PokemonList.sort((a, b) => {
      return (MontaNumero(a.number) > MontaNumero(b.number) ? 1 : -1);
    })
  }

}

function MontaNumero(PokemonID) {
  let PokemonIDConvertido = PokemonID;
  if (PokemonID < 1000) {
    PokemonIDConvertido = ('00' + PokemonID).slice(-3);
  } else {
    PokemonIDConvertido = (('000' + PokemonID).slice(-4)).replace(",","");
  }
  if (PokemonID > 10000) {
    PokemonIDConvertido = PokemonID;
  }

  return PokemonIDConvertido;
}
