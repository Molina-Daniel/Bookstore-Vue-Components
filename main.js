
Vue.component("showbooks", {
  props: ["books"],
  template: `
  <div class="flip-container">
    <div class="flipper">
      <div class="front">
        <img class="portada" :src="books.portada">
      </div>
      <div class="back">
        <p>{{ books.titulo }}</p>
        <p class="desc">{{ books.descripcion }}</p>
        <a data-fancybox="gallery" :href="books.detalle"><button>More info</button></a>
      </div>
    </div>
  </div>
  `
})

let myApp = new Vue({
  el: "#app",
  data: {
    url: "https://api.myjson.com/bins/1h3vb3",
    books: [],
    searchByTitle: "",
  },
  created() {
    this.getBooks();
  },
  computed: {
    searchBooks() {
      return this.books.filter((book) => book.titulo.toLowerCase().includes(this.searchByTitle.toLowerCase()))
    },
  },
  methods: {
    getBooks() {
      fetch(this.url)
        .then(data => data.json())
        .then(json => this.books = json.books)
        .catch(error => alert(error));
    }
  },
})
