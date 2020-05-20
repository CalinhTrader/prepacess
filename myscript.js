function telForm() {
    var num = $(this).val().replace(/\D/g,''); /* /\D/g tous les caractères sauf les nombres, les remplaces par string vide */
    $(this).val(num.substring(0,5) + ' ' + num.substring(5,7) + ' ' + num.substring(7,9) + ' ' + num.substring(9,11));
    /*substring(a,b) commence à a mais se termine à b non inclus*/
}
$('[type="tel"]').keyup(telForm); /* le sélecteur et la fonction qui y est appliquée, keyup = quand le clavier est relaché  */

/*  <script type="text/javascript" src="./myscript.js"></script> */

<script>
  document.getElementById("telephone").onkeyup = function() {telForm()};

  function telForm() {
    var x = document.getElementById("telephone");
    x.value = x.value.replace(/\D/g,'');
    x.value = x.value(num.substring(0,5) + ' ' + num.substring(5,7) + ' ' + num.substring(7,9) + ' ' + num.substring(9,11));
}
</script>

pattern="[0-9]{4} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder="Format : 0412 34 56 78"
