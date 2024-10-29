<template>
  <!-- <div style="margin-left: 200px; border: 1px solid blue"> -->
  <div class="container">
    <form class="form">
      <div class="input-container input-pricipal">
        <label for="salario">Salario Mensual:</label><br />
        <input type="text" id="salario" name="salario" placeholder="Salario Mensual" />
      </div>
      <div class="input-container input-pricipal">
        <label for="jornada_semanal">Duración Jornada Semanal:</label><br />
        <input
          type="text"
          id="jornada_semanal"
          name="jornada_semanal"
          placeholder="Duración Jornada Semanal"
        />
      </div>
      <div class="input-container">
        <label for="horas_extras_diurnas">Horas Extras Diurnas:</label><br />
        <input
          type="number"
          id="horas_extras_diurnas"
          name="horas_extras_diurnas"
          placeholder="Horas Extras Diurnas"
        />
      </div>

      <div class="input-container">
        <label for="horas_extras_nocturnas">Horas Extras Nocturnas:</label><br />
        <input
          type="number"
          id="horas_extras_nocturnas"
          name="horas_extras_nocturnas"
          placeholder="Horas Extras Nocturnas"
        />
      </div>

      <div class="input-container">
        <label for="horas_extras_diurnas_festivos">Horas Extras Diurnas Domingos y Festivos:</label>
        <input
          type="number"
          id="horas_extras_diurnas_festivos"
          name="horas_extras_diurnas_festivos"
          placeholder="Horas Extras Diurnas Domingos y Festivos"
        />
      </div>

      <div class="input-container">
        <label for="horas_extras_nocturnas_festivos"
          >Horas Extras Nocturnas Domingos y Festivos:</label
        >
        <input
          type="number"
          id="horas_extras_nocturnas_festivos"
          name="horas_extras_nocturnas_festivos"
          placeholder="Horas Extras Nocturnas Domingos y Festivos"
        />
      </div>
      <div class="button-form">
        <input  type="submit" value="Enviar" />
      </div>
    </form>
  </div>
  <!-- </div> -->
</template>

<style scope>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 68px;
  .form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 600px;
    flex-wrap: wrap;
    .input-container{
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      align-items: center;
      width:  50%;
    }
  }

  /* Responsive de mi codigo */
  .button-form {
    width:  100% ;
    display: flex;
    justify-content: center;
    input {
      width: auto;
      padding: 4px 8px;
    }
  }

}

@media (max-width > 600px){
  .button-form {
    background-color: red !important;
  }
}


.input-pricipal {
  width: 100% !important;
}

/* .container {
  border: 3px;
  font-style: italic;
  font-size: 10px;
  color: black;
}

.salario {
  border: color(srgb blue);
  background-color: rgb(153, 73, 51);
  font-size: larger;
} */
</style>
