
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.arterialBloodGas = (function(){
  var render = function() {
    wipe();
    var d = ''

    d += '<div id="arterialBloodGas">'
    d += '<div id="score"></div>'
    d += '<div id="test"></div>'
    d += '<div id="selection"></div>'
    d += '</div>'
    $('#board').append(d)

    // Question
    d = ''
    var outputs = [
     {key: 'acidity', label: 'pH'},
     {key: 'carbonDioxide', label: 'pCO<sub>2</sub>'},
     {key: 'bicarbonate',   label: 'HCO<sub>3</sub>'},
     {key: 'saturation',    label: 'SaO<sub>2</sub>'},
     {key: 'partialOxygen', label: 'pO<sub>2</sub>' },
    ]
    for (var i = 0; i < outputs.length; i++) {
      var key   = outputs[i].key
      var label = outputs[i].label
      var mark  = 'label-' + i
      d += '<div id="' + mark + '" class="label">'
      d +=   '<div id="' + mark + '-header" class="header">' + label + '</div>'
      d +=   '<div id="' + mark + '-output"></div>'
      d += '</div>'
    }
    $('#test').append(d)

    // Selection
    d = ''
    var options = [
      {key: 'compensation', values: [{key: 'compensation-appropriate', label: 'appropriate'}, {key: 'compensation-inappropriate', label: 'inappropriate'}]},
      {key: 'chronicity', values: [{key: 'chronicity-acute', label: 'acute'}, {key: 'chronicity-chronic', label: 'chronic'}]},
      {key: 'primary', values: [{key: 'primary-respiratory', label: 'respiratory'}, {key: 'primary-metabolic', label: 'metabolic'}]},
      {key: 'acidity', values: [{key: 'acidity-acidosis', label: 'acidosis'}, {key: 'acidity-normal', label: 'normal'}, {key: 'acidity-alkalosis', label: 'alkalosis'}]},
    ] 
    for (var i = 0; i < options.length; i++) {
      var k = options[i];
      d += '<div id="' + k.key + '" class="selection selection-' + i + '">'
      for (var j = 0; j < k.values.length; j++) {
        var v = k.values[j]
        d += '<div id="' + v.key + '" class="subselection" onclick="chunks.arterialBloodGas.updateRender(\'' + v.key + '\')">' + v.label + '</div>'
      }
      d += '</div>'
    }
    $('#selection').append(d)

    // Secondary Selection
    d = ''
    d += '<div id="secondaryWith" class="secondary">with secondary</div>'
    var options = [
      {key: 'secondaryDeficit', values: [{key: 'secondaryDeficit-respiratory', label: 'respiratory'}, {key: 'secondaryDeficit-metabolic', label: 'metabolic'}]},
      {key: 'secondaryAcidity', values: [{key: 'secondaryAcidity-acidosis', label: 'acidosis'}, {key: 'secondaryAcidity-alkalosis', label: 'alkalosis'}]}
    ]
    for (var i = 0; i < options.length; i++) {
      var k = options[i]
      d += '<div id="' + k.key + '" class="secondary secondarySelection secondarySelection-' + i + '">'
      for (var j = 0; j < k.values.length; j++) {
        var v = k.values[j]
        d += '<div id="' + v.key + '" class="secondarySubselection" onclick="chunks.arterialBloodGas.updateRender(\'' + v.key + '\')">' + v.label + '</div>'
      }
      d += '</div>'
    }
    $('#selection').append(d)

    // Scoreboard
    d = ''
    d += '<div id="cumulative">0</div>'
    d += '<div id="questionCount">n = <span class="questionCount">0</div>'
    d += '<div id="lastScore">+0</div>'
    $('#score').append(d)

    $('.secondary').css('display','none')
  }

  var updateRender = function(item) {
    console.log(item)
  }


  return {
    render: render,
    updateRender : updateRender,
  }
})()
