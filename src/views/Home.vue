<template> 
  <div class="home">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </p>
    <section class="menu">
      <h2>Menu</h2>
      <MenuItem
        v-for="item in simpleMenu"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.name"
        @add-items-to-cart="incrementCountShoppingCart"
      />
    </section>

    <aside class="shopping-cart">
      <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
    </aside>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuItem from "@/components/MenuItem.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  components: {
    MenuItem
  },
  computed: {
    ...mapState(['restaurantName', 'simpleMenu', 'shoppingCart']),
    ...mapGetters(['copyright'])
  },
  methods: {
    ...mapActions(['incrementCountShoppingCart'])
  },
}
</script>

<style>
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-style: italic;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.shopping-cart{
  position: absolute;
  right: 30px;
  top: 0;
}
</style>