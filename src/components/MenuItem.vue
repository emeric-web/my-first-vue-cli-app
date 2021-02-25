<template>
    <div class="menu-item">
        <img class="menu-item__image" :src="image.source" :alt="image.alt" />
        <div>
            <h3>{{ name }}</h3>
            <p>Prix : {{ generatedPrice }}</p>
            <p v-if="inStock">En stock</p>
            <p v-else>En rupture de stock</p>
            <div>
                <label for="add-item-quantity">Quantité : {{ quantity }}</label>
                <input v-model.number="quantity" id="add-item-quantity" type="number" />
                <BaseButton @click="updateShoppingCart(quantity)">
                    Ajouter au panier d'achat
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<style>
.menu-item {
    display: flex;
    width: 500px;
    justify-content: space-between;
    margin-bottom: 30px;
}
.menu-item__image{
    max-width: 300px;
}
</style>

<script>
import BaseButton from "./BaseButton.vue"

export default {
    name: 'MenuItem',
    components: {
        BaseButton
    },
    props: {
        image: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }, 
        quantity: {
            type: Number,
            default: 1
        },
        inStock: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            onSale: false,
        }
    },
    beforeMount() {
        const today = new Date().getDate();
        this.onSale = today % 2 === 0 ? true : this.onSale;
    },
    methods: {
        updateShoppingCart(quantity) {
            this.$emit('add-items-to-cart', quantity )
        }
    },
    computed: {
        generatedPrice() {
            if(this.onSale) {
                return Math.round(this.price*90)/100;
            } else {
                return this.price;
            }
        }
    }
}
</script>