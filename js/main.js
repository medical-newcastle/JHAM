
wipe = function() { $('#board').empty() }

menu = function() {
  // if shown, hide, if hidden, show
  if ($('#menu').hasClass('on')) { // hide it
    // $('#module-selector').css('opacity','0');
    $('#module-selector').css('display','none');
  } else {
    // $('#module-selector').css('opacity','100');
    $('#module-selector').css('display','block');
  }
  
}

indexing = function() {
  var list = [
   {key: 'arterial-blood-gas', title: 'Arterial Blood Gas', module: 'chunks.arterialBloodGas.render()'},
   {key: 'clinical-sequencing', title: 'Clinical Examination', module: 'chunks.clinicalSequencing.render()'},
  ]

  var d = ''
  for (var i = 0; i < list.length; i++) {
    var t = list[i]
    var m = 'wipe(); ' + t.module + '; menu(); $(\'#menu\').removeClass(\'on\');'
    d += '<div class="module" id="module-' + t.key + '" onclick="' + m + '">' + t.title + '</div>'
  }

  $('#module-selector').append(d)
}
