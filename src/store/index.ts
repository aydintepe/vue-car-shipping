import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name:"Vue Car Shipping Dropdown",
    years: [],
    year: null,
    makes: [],
    make: '',
    models: []
  },
  mutations: {
      SET_YEARS(state, years) {
        state.years = years;
      },
      SET_MAKES(state, makes) {
        state.makes = makes;
      },
      SET_MODELS(state, models) {
          state.models = models;
      }
  },
  actions: {
      getYears({commit}) {
        axios 
        .get('https://yacdn.org/proxy/https://rateengine.ship.cars/v2/vehicles/years/?format=json&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(r => { commit('SET_YEARS', r.data)})
        .catch(err => console.log(err));
      },
      getMakes({commit}, year: number) {
        axios 
        .get(`https://yacdn.org/proxy/https://rateengine.ship.cars/v2/vehicles/makes/?year=${year}&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(r => { commit('SET_MAKES', r.data)})
        .catch(err => console.log(err));
      },
      getModels({commit}, params) {
        console.log(params);
        axios 
        .get(`https://yacdn.org/proxy/https://rateengine.ship.cars/v2/vehicles/models/?format=json&make=${params.make}&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef&year=${params.year}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(r => { commit('SET_MODELS', r.data)})
        .catch(err => console.log(err));
      }
  },
  getters: {
      years: state => state.years,
      makes: state => state.makes,
      models: state => state.models
  }
})
