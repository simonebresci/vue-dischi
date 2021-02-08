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
    arrayFiltered: [],
    listaGeneri: ['genere1', 'genere2','genere3'],
    filterGenre: null,
    filterActive: false
  },
  mounted() {
    this.getDischi();
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
          alert('disattivo filtro');
          this.filterActive = false;
        }else{
          // FILTRO ATTIVATO
          this.filterActive = true;
          this.arrayFiltered = this.arrayDischi.filter( (element, index) =>{
            return this.arrayDischi[index].genre === this.filterGenre
          });

          console.log(this.arrayFiltered);
        }

      },
      selectArray: function(){
        if (!this.filterActive){
          return this.arrayDischi;
        }else{
          return this.arrayFiltered;
        }

      },
      getGenres: function(){
        console.log('Aggiungo i generi musicali');

        this.arrayDischi.forEach( (element, index) =>{
          // AGGIUNGI SOLO NUOVI GENERI
          console.log('Inizio il foreach');
          console.log(item)
          console.log(item)
          if(this.listaDischi.indexOf(item) >-1){
            console.log('Nuovo genere trovato');
             this.listaGeneri.push(item);
          }
        });

            // if(this.listaDischi.indexOf(item) >-1){
            //   this.listaGeneri.push(item);
            // }
            console.log(this.listaGeneri);



      }

    }

  });
Vue.config.devtools = true;
