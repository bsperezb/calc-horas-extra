<template>
  <aside class="menu" :class="{ 'is-visible': isChecked }">
    <div class="menu-content">
      <div class="menu-title">Title</div>
      <hr />
      <label for="check">check</label>
      <input type="checkbox" v-model="isChecked" name="test" id="check" />
      <hr />
      <hr />
      <nav class="menu-nav">
        <ul>
          <li>
            <a href="#">List 1</a>
          </li>
          <li>
            <a href="#">List 2</a>
          </li>
          <li>
            <a href="#">List 3</a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import { defineComponent } from 'vue'
import { useMenuStore } from '@/stores/menu'

export default defineComponent({
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    isChecked: {
      get() {
        const store = useMenuStore()
        return store.isChecked // Devuelve el estado de isChecked desde la tienda
      },
      set(value) {
        const store = useMenuStore()
        store.isChecked = value // Actualiza el estado en la tienda cuando el checkbox cambia
      }
    }
  }
})
</script>

<style lang="css" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  border: 1px solid red;
  min-width: 270px;
  height: 80vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.5s ease;
  & .menu-content {
    max-width: 250px;
    /* border: 1px solid green; */
    background-image: linear-gradient(195deg, #42424a, #191919);
    text-decoration: none;
    height: 100%;
    margin: auto;
    border-radius: 0.75rem;
  }
  nav ul {
    list-style: none; /* Quita los puntos de las listas */
    padding: 0;
  }

  nav li {
    padding: 10px 0; /* Añade espacio entre los elementos de la lista */
  }

  nav a {
    color: #c7c7c7; /* Color del texto de los enlaces */
    text-decoration: none; /* Quita el subrayado */
  }

  nav a:hover {
    color: #ffffff; /* Opcional: Cambia el color al hacer hover */
  }
  .menu-title {
    color: #c7c7c7; /* Color del texto de los enlaces */
    font-weight: 800;
    text-align: center;
    margin: auto;
    min-height: 40px;
  }
}

.is-visible {
  color: orange;
  transform: translateX(-280px);
}
</style>
