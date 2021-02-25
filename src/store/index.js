import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurantName: "La belle vue",
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/croissant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 1,
        price: 2.99
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 1,
        price: 3.99
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      }
    ],
    shoppingCart: 0,
    date: {
      day: 23,
      month: 2,
      year: 2021
    }
  },
  getters: {
    copyright(state) {
      const currentYear = new Date().getFullYear()

      return `Copyright ${state.restaurantName} ${currentYear}`
    },
    formattedDate(state) {
      return `${state.date.day} / ${state.date.month} / ${state.date.year}`;
    }
  },
  mutations: {
    INCREMENT_SHOPPINGCART(state, amount = 1) {
      state.shoppingCart += Number(amount);
    },
    INCREMENT_MONTH(state) {
      ++state.date.month;
    },
    INCREMENT_YEAR(state) {
      ++state.date.year;
      state.date.month = 1;
    },
  },
  actions: {
    incrementMonth(context) {
      if(context.state.date.month > 11) {
        context.commit("INCREMENT_YEAR");
      } else {
        context.commit("INCREMENT_MONTH");
      }
    },
    incrementCountShoppingCart(context, amount) {
      context.commit('INCREMENT_SHOPPINGCART', amount)
    }

  },
  modules: {
  }
})
