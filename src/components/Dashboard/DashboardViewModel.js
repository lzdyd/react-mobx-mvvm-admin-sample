class PokemonViewModel {
  constructor(pokemonStore) {
    this.store = pokemonStore;
  }

  getData() {
    return this.store.getData();
  }

  addValue(val) {
    this.store.addValue(val);
  }
}

export default PokemonViewModel;
