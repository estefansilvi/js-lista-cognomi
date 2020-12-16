var elencoOutput = document.getElementById('personaggi-simpson')
var posizioneOutput = document.getElementById('posizione');
var personaggi = ['Homer Simpson', 'Marge Simpson', 'Bart Simpsonn', 'Lisa Simpson', 'Maggie Simpson', 'Abram Simpson','Patty e Selma Bouvier', 'Lenny Leonard', 'Troy McClure', 'Barney Gumble', 'Boe Szyslak', 'Ned Flanders', 'Carl Carlson', 'Montgomery Burns', 'Waylon Smithers', 'Seymour Skinner', 'Telespalla Bob', 'Uomo dei fumetti', 'Kent Brockman', 'Rod e Todd Flanders', 'Tony Ciccione', 'Milhouse Van Houten' ];
var posizioneTrovataDelPersonaggio = 0;

var nuovoPersonaggio = prompt (' inserisci il nome di un nuovo personaggio');
personaggi.push(nuovoPersonaggio);

personaggi.sort();

for(var i = 0; i < personaggi.length; i++) {
  var contenutoPrecedente = elencoOutput.innerHTML;
  elencoOutput.innerHTML = contenutoPrecedente + '<li>' + personaggi[i] + '</li>';
  console.log(personaggi[i] , i );

  if( nuovoPersonaggio  === personaggi[i]) {
    posizioneTrovataDelPersonaggio = i;
  }
}


posizioneOutput.innerHTML = '<h1>il nuovo personaggio ' + nuovoPersonaggio + ' ora si trova alla posizione ' + posizioneTrovataDelPersonaggio +'</h1>';
