<template>
    <aside class="cart-container">
        <div class="cart">
            <h1 class="cart-title spread">
            <span>
                Account
                <i class="bi-cart-fill me-1"></i>
            </span>
            <button class="cart-close" @click="toggle">&times;</button>
            </h1>
            <div class="cart-body">
            <table class="cart-table">
              <thead>
                <tr>
                    <th><span>Events you joined :</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(quantity, key, i) in cart" :key="i">
                    <td>
                    <button class="btn btn-light cart-remove" @click="remove(key)">
                        &times;
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <p class="center" v-if="!Object.keys(cart).length"><em>No events planned.</em></p>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
  props: ['toggle', 'cart', 'remove'],
  methods: {
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.toFixed(2)
    },
    getPhoto (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.photo
    },
    calculateTotal () {
      const total = Object.entries(this.cart).reduce((acc, curr) => { return acc + (curr[1] * this.getPrice(curr[0])) }, 0)
      return total.toFixed(2)
    }
  }
}
</script>
