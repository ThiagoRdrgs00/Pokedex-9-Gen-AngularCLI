import { Component, OnInit } from '@angular/core';
import { PokemonapiService } from '../../services/pokemonapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  nameFilter = '';
  pokemonSelecionado = null;

  constructor(
    private pokemonapi: PokemonapiService
  ) {}

  ngOnInit(): void {
    this.pokemonapi.listarTodos();
  }

  get PokemonList() {
    return this.pokemonapi.PokemonList.filter(Pokemon => {
      return Pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  } 

  get PokemonTypes() {
    return this.pokemonapi.types;
  }
  
  get pokemonSprite() {
    let PokemonIDConvertido = this.pokemonSelecionado.number;
    if (this.pokemonSelecionado.number < 100) {
      PokemonIDConvertido = ('00' + this.pokemonSelecionado.number).slice(-3);
    }
    return '//serebii.net/scarletviolet/pokemon/new/'+PokemonIDConvertido+'.png';
  }

  selectPokemon(pokemon) {
    this.pokemonSelecionado = pokemon;
    this.pokemonapi.obterDadosPokemon(this.pokemonSelecionado.name);
  }
}