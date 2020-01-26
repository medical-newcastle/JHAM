
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.arterialBloodGas = (function(){

  var round = (value, decimals) => {
   return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
   };
   
  var render = function() {
    wipe();
    var d = ''

    d += '<div id="arterialBloodGas">'
    d += '<div id="score"></div>'
    d += '<div id="clock">0</div>'
    d += '<div id="test"></div>'
    d += '<div id="selection"></div>'
    d += '<div id="subdraw"></div>'
    d += '<div id="start" onclick="chunks.arterialBloodGas.initiate()">start</div>'
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
      d +=   '<div id="' + mark + '-output" class="not-header"></div>'
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
        d += '<div id="' + v.key + '" class="subselection" onclick="chunks.arterialBloodGas.updateRender(\'' + v.key + '\')"'
        d += ' onclickr="chunks.arterialBloodGas.updateRender(\'' + v.key + '\')">'
        d += v.label + '</div>'
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
    
    // Submit buttons
    d = ''
    d += '<div id="assess" onclick="chunks.arterialBloodGas.assess()">assess</div><div id="next" onclick="chunks.arterialBloodGas.next()">next <span class="">\>\></span></div>'
    $('#subdraw').append(d)

    $('.secondary').css('display','none')
    $('#subdraw').css('display','none')
  }

  var updateRender = function(item, val) {
    // console.log(item)
    if ($('#' + item).hasClass('disabled')) { return }
    switch(item) {
      case 'compensation-appropriate':
        $('#compensation-inappropriate').removeClass('active')
        $('#acidity-normal').removeClass('active')
        break;
      case 'compensation-inappropriate':
        $('#compensation-appropriate').removeClass('active')
        $('#acidity-normal').removeClass('active')
        break;
      case 'chronicity-acute':
        $('#chronicity-chronic').removeClass('active')
        $('#acidity-normal').removeClass('active')
        break;
      case 'chronicity-chronic':
        $('#chronicity-acute').removeClass('active')
        $('#acidity-normal').removeClass('active')
        break;
      case 'primary-respiratory':
        $('#primary-metabolic').removeClass('active')
        $('#acidity-normal').removeClass('active')
        if ($('.secondary').css('display') != 'none' && $('#secondaryDeficit-respiratory').hasClass('active')) {
          $('#secondaryDeficit-respiratory').removeClass('active')
          $('#secondaryDeficit-metabolic').addClass('active')
        }
        break;
      case 'primary-metabolic':
        $('#chronicity-acute').removeClass('active')
        $('#chronicity-chronic').removeClass('active')
        $('#primary-respiratory').removeClass('active')
        $('#acidity-normal').removeClass('active')
        if ($('.secondary').css('display') != 'none' && $('#secondaryDeficit-metabolic').hasClass('active')) {
          $('#secondaryDeficit-metabolic').removeClass('active')
          $('#secondaryDeficit-respiratory').addClass('active')
        }
        break;
      case 'acidity-acidosis':
        $('#acidity-normal').removeClass('active')
        $('#acidity-alkalosis').removeClass('active')
        break;
      case 'acidity-normal':
        $('#compensation-appropriate').removeClass('active')
        $('#compensation-inappropriate').removeClass('active')
        $('#chronicity-acute').removeClass('active')
        $('#chronicity-chronic').removeClass('active')
        $('#primary-respiratory').removeClass('active')
        $('#primary-metabolic').removeClass('active')
        $('#acidity-acidosis').removeClass('active')
        $('#acidity-alkalosis').removeClass('active')
        break;
      case 'acidity-alkalosis':
        $('#acidity-acidosis').removeClass('active')
        $('#acidity-normal').removeClass('active')
        break;
      case 'secondaryDeficit-respiratory':
        $('#secondaryDeficit-metabolic').removeClass('active')
        if ($('#primary-respiratory').hasClass('active')) {
          $('#primary-respiratory').removeClass('active')
          $('#primary-metabolic').addClass('active')
        }
        break;
      case 'secondaryDeficit-metabolic':
        $('#secondaryDeficit-respiratory').removeClass('active')
        if ($('#primary-metabolic').hasClass('active')) {
          $('#primary-metabolic').removeClass('active')
          $('#primary-respiratory').addClass('active')
        }
        break;
      case 'secondaryAcidity-acidosis':
        $('#secondaryAcidity-alkalosis').removeClass('active')
        if ($('#acidity-acidosis').hasClass('active')) {
          $('#acidity-acidosis').removeClass('active')
          $('#acidity-alkalosis').addClass('active')
        }
        break;
      case 'secondaryAcidity-alkalosis':
        $('#secondaryAcidity-acidosis').removeClass('active')
        if ($('#acidity-alkalosis').hasClass('active')) {
          $('#acidity-alkalosis').removeClass('active')
          $('#acidity-acidosis').addClass('active')
        }
        break;
      case 'accrete-questions':
        $('#questionCount .questionCount').text(chunks.arterialBloodGas.outcome.questions);
        break;
      case 'accrete-score':
        $('#cumulative').text(chunks.arterialBloodGas.score);
        break;
      case 'accrete-points':
        $('#lastScore').text('+' + val);
        break;
      default:
        break;
    }
    $('#' + item).addClass('active')
    // No acute or chronic calculations in metabolic derangement
    if ($('#primary-metabolic').hasClass('active')) { $('#chronicity-acute').removeClass('active'); $('#chronicity-chronic').removeClass('active') }
    // Activate secondary
    if (item == 'compensation-inappropriate') {
      $('.secondary').css('display', 'block')
    }
    if (!$('#compensation-inappropriate').hasClass('active')) {
      $('.secondary').css('display', 'none')
      $('.secondarySubselection').removeClass('active')
    }
  }
  
  var initiate = function() {
    $('#subdraw').css('display','block')
    $('#start').css('display','none')
    $('.subselection').removeClass('active')
    $('.secondarySubselection').removeClass('active')
    populate()
    loop()
  }

  var loop = function() {
    if (chunks.arterialBloodGas.clock.current > 0) {
      chunks.arterialBloodGas.clock.current -= 1
      $('#clock').text(chunks.arterialBloodGas.clock.current)
      // update score
      if (chunks.arterialBloodGas.clock.allow) {
        chunks.arterialBloodGas.clock.identity = setTimeout(loop, chunks.arterialBloodGas.clock.interval)
      }
    } else if (chunks.arterialBloodGas.clock.current <= 0) {
      // hide submit, hide next, others
      disable()
      chunks.arterialBloodGas.clock.allow = false
    }
  }
  
  var populate = function() {
    var f = chunks.arterialBloodGas.xQuestion() || function(){};
    var a = chunks.arterialBloodGas.answer
    var b = chunks.arterialBloodGas.question
    
    $('#label-0-output').text(round(b.pH, 2))
    $('#label-1-output').text(round(b.pCO2, 2))
    $('#label-2-output').text(round(b.HCO3, 2))
    $('#label-3-output').text(round(b.SaO2, 2))
    $('#label-4-output').text(round(b.pO2, 2))
  }

  var next = function() {
    if ($('#next').hasClass('disabled')) { } else {
      accrete();
      refresh();
      enable();
      populate();
      $('.secondary').css('display', 'none');
      $('#assess').removeClass('disabled')
    }
  }
  
  var accrete = function() {
    chunks.arterialBloodGas.outcome.questions += 1
    updateRender('accrete-questions')
  }
  
  var refresh = function() {
    $('.subselection').removeClass('active').removeClass('correct').removeClass('incorrect').removeClass('answer')
    $('.secondarySubselection').removeClass('active').removeClass('correct').removeClass('incorrect').removeClass('answer')
  }
  
  var disable = function() {
    $('.subselection').addClass('disabled')
    $('.secondarySubselection').addClass('disabled')
    $('#next').addClass('disabled')
  }
  
  var enable = function() {
    $('.subselection').removeClass('disabled')
    $('.secondarySubselection').removeClass('disabled')
  }

  return {
    render       : render,
    updateRender : updateRender,
    initiate     : initiate,
    populate     : populate,

    clock        : {
      interval   : 1000,
      duration   : 1 * 60 + 1,
      current    : 1 * 60 + 1,
      identity   : false,
      allow      : true,
    },
    loop         : loop,
    next         : next,
  }
})()
