var elencoOutput = document.getElementById('cognomi')
var posizioneOutput = document.getElementById('posizione');
var cognomi = ['Silvi', 'Piombetti', 'Imperio', 'Carbone', 'Sagrati', 'Dubini','Pizzichini', 'Rango', 'Partipilo', 'Marcucci', 'Medici', 'Escobar', 'Annibali', 'Zorzi', 'Wattson', 'Urbinati'];
var posizioneTrovataDelNuovoCognome = 0;

var nuovoCognome = prompt (' inserisca il suo cognome');
cognomi.push(nuovoCognome);

cognomi.sort();

for(var i = 0; i < cognomi.length; i++) {
  var contenutoPrecedente = elencoOutput.innerHTML;
  elencoOutput.innerHTML = contenutoPrecedente + '<li>' + cognomi[i] + '</li>';
  console.log(cognomi[i] , i );

  if( nuovoCognome  === cognomi[i]) {
    posizioneTrovataDelNuovoCognome = i;
  }
}


posizioneOutput.innerHTML = '<h3>  il suo cognome:'   + nuovoCognome + ' ora si trova alla posizione ' + posizioneTrovataDelNuovoCognome +'</h3>';
