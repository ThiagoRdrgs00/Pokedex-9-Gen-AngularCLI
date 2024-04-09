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
    
  }

  get PokemonList() {
    return this.pokemonapi.PokemonList.filter(Pokemon => {
      return Pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  } 
  
  get pokemonSprite() {
    let PokemonIDConvertido;
    if (this.pokemonSelecionado.number < 1000) {
      PokemonIDConvertido = ('000' + this.pokemonSelecionado.number).slice(-3);
    } else {
      PokemonIDConvertido = (('0000' + this.pokemonSelecionado.number).slice(-4)).replace(",","");
    }
    return '//serebii.net/scarletviolet/pokemon/new/'+PokemonIDConvertido+'.png'
  }

  selectPokemon(pokemon) {
    this.pokemonSelecionado = pokemon;
  }
}
