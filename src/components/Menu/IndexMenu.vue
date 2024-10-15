<template>
  <aside class="menu" :class="{ 'is-visible': isChecked, 'is-hovered': !isHoverMenu }" @mouseover="isHoverMenu = false"
    @mouseleave="isHoverMenu = true">
    <div class="menu-content">
      <div class="menu-title">Calculadora</div>
      <hr />
      <!-- <label for="check">check</label>
      <input type="checkbox" v-model="isChecked" name="test" id="check" />
      <hr /> -->
      <nav class="menu-nav">
        <ul>
          <li>
            <a class="menu-item" href="#">
              <div class="menu-item-icon">
                <IconCalc />
              </div>
              <p class="menu-item-label" :class="{ 'hidde-menu-label': isHoverMenu }">title</p>
            </a>
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
import IconCalc from '@/components/icons/IconCalc.vue'

export default defineComponent({
  data() {
    return {
      test: 'test',
      isChecked: false,
      isHoverMenu: true,

    }
  },
  components: { IconCalc },
  computed: {
    //   isChecked: {
    //     get() {
    //       const store = useMenuStore()
    //       return store.isChecked // Devuelve el estado de isChecked desde la tienda
    //     },
    //     set(value) {
    //       const store = useMenuStore()
    //       store.isChecked = value // Actualiza el estado en la tienda cuando el checkbox cambia
    //     }
    //   }
  }
})
</script>

<style lang="css" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  max-width: 270px;
  /* transition: transform 0.5s ease; */
  width: 70px;
  transition: width 0.3s ease, transform 0.5s ease; /* Transición suave para el cambio de ancho */
  border: 1px solid red;
  &.is-hovered {
    width: 250px; /* Ancho cuando el menú está en hover */
  }
  &.is-visible {
  color: orange;
  transform: translateX(-280px);
}


  & .menu-content {
    /* border: 1px solid green; */
    /* background-image: linear-gradient(195deg, #42424a, #191919); */
    background: #212120;
    text-decoration: none;
    height: 100%;
    margin: auto;
  }

  .menu-nav {
    max-width: 250px;
  }

  .menu-item {
    display: flex;
    padding: 10px 15px;
    justify-content: start;
    align-items: center;
  }

  nav ul {
    list-style: none;
    /* Quita los puntos de las listas */
    padding: 0;
  }

  nav li {
    padding: 10px 0;
    /* Añade espacio entre los elementos de la lista */
  }

  nav a {
    color: #c7c7c7;
    /* Color del texto de los enlaces */
    text-decoration: none;
    /* Quita el subrayado */
  }

  nav a:hover {
    color: #ffffff;
    /* Opcional: Cambia el color al hacer hover */
  }

  .menu-title {
    color: var(--text-primary-color);
    font-weight: 800;
    text-align: center;
    margin: auto;
    min-height: 40px;
  }

  .menu-item-label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-bg);
    white-space: nowrap;
    flex-grow: 1;
    padding-left: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: opacity 0.5s ease, transform 0.3s ease;
    opacity: 1;
    transform: translateX(0px);
  }

  .hidde-menu-label {
    /* display: none; */
    opacity: 0;
    transform: translateX(-20px);

  }

  .menu-item-icon {
    max-width: 30px;
    max-height: 30px;
  }
}

</style>
