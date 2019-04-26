
Vue.component("books", {

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
