// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus (per oggi pomeriggio): Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout


// TODO: placeholder filtro genere

var app = new Vue ({
  el: '#root',
  data: {
    arrayDischi: [],
    arrayFiltered: [],
    listaGeneri: [],
    filterGenre: null,
    filterActive: false
  },
  mounted() {
    // Recupera dischi da endpoint esterno
    this.getDischi();
  },
  beforeUpdate(){
    // Popola il filtro con i tutti i genere dei dischi caricati
    this.getGenres();
  },
  methods: {
    pushElement: function (elemento){
      this.arrayDischi.push(elemento);
    },
    getDischi: function(){
      const self = this;
        // Prendi mail generata dal link
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function(objReceived){
               const result = objReceived.data.response;
               self.arrayDischi = result;
             });

      },
      filtraArrayGenere: function(){
        // FILTRO DISATTIVATO
        if(this.filterGenre === ''){
          this.filterActive = false;
        }else{
          // FILTRO ATTIVATO
          this.filterActive = true;
          this.arrayFiltered = this.arrayDischi.filter( (element, index) =>{
            return this.arrayDischi[index].genre === this.filterGenre
          });

        }

      },
      selectArray: function(){
        // SELEEZIONA ARRAY DA MOSTRARE
        if (!this.filterActive){
          return this.arrayDischi;
        }else{
          return this.arrayFiltered;
        }

      },
      getGenres: function(){
        this.arrayDischi.forEach( (item, index) =>{
          // AGGIUNGI SOLO NUOVI GENERI
          if(this.listaGeneri.indexOf(item.genre) <0){
             this.listaGeneri.push(item.genre);
          }
        });
      }

    }

  });
Vue.config.devtools = true;
