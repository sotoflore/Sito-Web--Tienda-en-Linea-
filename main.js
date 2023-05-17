function openCity(evt, cityName) {
  var i, tabcontent, boton;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  boton = document.getElementsByClassName("boton");
  for (i = 0; i < boton.length; i++) {
    boton[i].className = boton[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();