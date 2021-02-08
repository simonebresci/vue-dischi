// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus (per oggi pomeriggio): Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout


var app = new Vue ({
  el: '#root',
  data: {
    arrayDischi: [],
    filterGenre: null
  },
  mounted() {
    this.getDischi();
    // this.getDisco();

  },
  methods: {
    pushElement: function (elemento){
      this.arrayDischi.push(elemento);
    },
    getDischi: function(){
      const self = this;
      // for (var i = 0; i < 10; i++) {
        // Prendi mail generata dal link
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function(objReceived){
               const result = objReceived.data.response;
               self.arrayDischi = result;
             });
        // }

      },
      filterGenre: function(){
        
      }
      // getDisco: function(){
      //   const self = this;
      //   // for (var i = 0; i < 10; i++) {
      //     // Prendi mail generata dal link
      //     axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function(objReceived){
      //            const result = objReceived.data.response;
      //            self.pushElement(result);
      //          });
      //     console.log(result);
      //   // }
      // }

      // }

    }

  });
Vue.config.devtools = true;
