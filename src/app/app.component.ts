import { Component, OnInit  } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock.pokemons'
import { from } from 'rxjs';

@Component({
  selector: 'pokemons-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //variable title qui est egal à une string
  title = 'pokemons';

  //propriété pokemons qui contient un tableau d'objet de type Pokemon
  private pokemons: Pokemon[];

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}
