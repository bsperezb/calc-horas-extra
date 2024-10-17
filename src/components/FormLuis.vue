<template>

<div style="margin-left: 200px; border: 1px solid blue;">
  <div class="container">
    <form action="/enviar" method="post">
      <div class="salario">
        <label for="salario">Salario Mensual:</label><br>
        <input type="text" id="salario" name="salario" placeholder="Salario Mensual"><br><br>
      </div>

      <label for="jornada_semanal">Duración Jornada Semanal:</label><br>
      <input type="text" id="jornada_semanal" name="jornada_semanal" placeholder="Duración Jornada Semanal"><br><br>

      <label for="horas_extras_diurnas">Horas Extras Diurnas:</label><br>
      <input type="number" id="horas_extras_diurnas" name="horas_extras_diurnas" placeholder="Horas Extras Diurnas"><br><br>

      <label for="horas_extras_nocturnas">Horas Extras Nocturnas:</label><br>
      <input type="number" id="horas_extras_nocturnas" name="horas_extras_nocturnas" placeholder="Horas Extras Nocturnas"><br><br>

      <label for="horas_extras_diurnas_festivos">Horas Extras Diurnas Domingos y Festivos:</label><br>
      <input type="number" id="horas_extras_diurnas_festivos" name="horas_extras_diurnas_festivos" placeholder="Horas Extras Diurnas Domingos y Festivos"><br><br>

      <label for="horas_extras_nocturnas_festivos">Horas Extras Nocturnas Domingos y Festivos:</label><br>
      <input type="number" id="horas_extras_nocturnas_festivos" name="horas_extras_nocturnas_festivos" placeholder="Horas Extras Nocturnas Domingos y Festivos"><br><br>

      <input type="submit" value="Enviar">
    </form>
  </div>
</div>
</template>

<style>

.container {
    border: 3px;
    font-style: italic;
    font-size: 10px;
    color: black;
}

.salario {
    border:  color(srgb blue);
    background-color: rebeccapurple;
    font-size: larger;

}


</style>
