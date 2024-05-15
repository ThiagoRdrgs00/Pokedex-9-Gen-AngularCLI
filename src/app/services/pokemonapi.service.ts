import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PokeInterface{
  created: string,
  modified: string,
  name: string,
  pokemon: any[],
  types: any[],
  url: string
  results: any[],
  height: BigInt,
  id: BigInt;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {
  private pokeURL = 'https://pokeapi.co/api/v2/pokemon/';
  PokemonList = [];
  PokemonTypes = [];
  types = "";
  
  constructor(
    private http: HttpClient
  ) { }

  listarTodos() {
    const params = new HttpParams().set('limit', 1300);
    this.http.get<PokeInterface>(this.pokeURL, {params})
      .subscribe(response => {
        response.results.forEach(results =>{
          results.number = formataNumeroPokemon(this.getID(results.url));
        })
        this.PokemonList = response.results.filter(results => results.number < 10000);
      });
  }

  private getID(url){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  obterDadosPokemon(pokemonSelecionado) {
    this.types = "";
    let pokeURLDados = 'https://pokeapi.co/api/v2/pokemon/' + pokemonSelecionado;
    const params = new HttpParams().set('limit', 1);
    this.http.get<PokeInterface>(pokeURLDados, {params})
      .subscribe(response => { 
        response.types.forEach(response =>{
          console.log(response.type.name);
          if (this.types == "") {
            this.types = response.type.name;
          } else {
            this.types = this.types + " - " + response.type.name;
          }
        })
      });
  }
}

function formataNumeroPokemon(PokemonID) {
  let PokemonIDConvertido = PokemonID;
  if (PokemonID < 100) {
    PokemonIDConvertido = ('00' + PokemonID).slice(-3);
  }
  return PokemonIDConvertido;
}
