import Vue from 'vue';
import { mapState } from 'vuex';
import Component from 'vue-class-component';

@Component({computed: mapState(['years', 'makes', 'models'])})
export default class CarShippingComponent extends Vue {
  year = null;
  make = null;
  model = null;
  mounted (){
    this.$store.dispatch('getYears');
  }

  getMakes() {
    this.$store.dispatch('getMakes',this.year);
    this.make = null; this.model = null;
  }

  getModels() {
    let params = { 
      year: this.year, 
      make: this.make 
    }
    this.$store.dispatch('getModels',params);
  }
}

