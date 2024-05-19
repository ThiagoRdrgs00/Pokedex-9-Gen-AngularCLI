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
  
  get fotoPokemon() {
    return this.pokemonapi.foto;
  }

  get hpPokemon() {
    return this.pokemonapi.hp;
  }

  get ataquePokemon() {
    return this.pokemonapi.ataque;
  }

  get spataquePokemon() { 
    return this.pokemonapi.spattack;
  }

  get defesaPokemon() {
    return this.pokemonapi.defesa;
  }

  get spdefesaPokemon() { 
    return this.pokemonapi.spdefesa;
  }

  get velocidadePokemon() { 
    return this.pokemonapi.velocidade;
  }

  selectPokemon(pokemon, opcaoFoto) {
    this.pokemonSelecionado = pokemon;
    this.pokemonapi.obterDadosPokemon(this.pokemonSelecionado.name, opcaoFoto);
  }
}