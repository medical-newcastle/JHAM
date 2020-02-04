
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = (function() {

  var shuffle = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a; }

  var random = function(array) { return array[Math.floor(Math.random() * array.length)] };

  // Pseudo-code
  //   pick the disease
  //   pick the variant
  //   of the variants,
  //      randomize the seeded sequence
  //      in sequence,
  //        pick the first sign - this is the hard sign for the disease variant
  //        accrete the disease probability from the difficulty rating
  //        with each sequential pick, re-evaluate the chances of picking another sign
  //        of the unpicked steps, merge them into the base disease clone()
  //   randomise the base disease
  //   in sequence,
  //      accrete the disease probability from the difficulty ratings
  // return the disease signs
  var elect = function(disease) {
    var DR  = 14;
    var CA  = 0;
    var out       = {};
        out.signs = {};
    var disease   = disease || null;

    var diseases  = chunks.clinicalSequencing.diseases || {};

    var m = clone(diseases[disease]);
    var _ = m._variants[Math.floor(Math.random() * m._variants.length)];
    var z = clone(m.variants);

    z = shuffle(z);
 
    var X = 0;
    for (var i = 0; i < z.length; i++) {
      X = i // exit
      var N     = z[i]
      var delta = 0
      if (CA == 0) {
        if (N.variant == _) {
          var s = random(N.findings);
          CA += s.difficulty;
          out.signs[N.step] = clone(s);
        }
      } else {
        if ((CA - DR) >= 0) { delta = CA - DR };
        var Delta = 2/delta; // pay attention
        var Pr    = Math.random();
        if (Pr > Delta) { break; } else {
          if (N.variant == _) {
            var s = random(N.findings);
            CA += s.difficulty;
            out.signs[N.step] = clone(s);
          }
        }
      }
    }
    var h = z.splice(X + 1, z.length - X - 1);
    var g = clone(m.examination);
        g = g.concat(h);
        h = []
    for (var i = 0; i < g.length; i++) {
      if (typeof out.signs[g[i].step] == 'undefined') {
        h.push(g[i]);
      }
    }          
    for (var i = 0; i < h.length; i++) {
      var N     = h[i]
      var delta = 0
      if (CA == 0) {
        var s = random(N.findings)
        CA += s.difficulty
        out.signs[N.step] = clone(s)
      } else {
        if ((CA - DR) >= 0) { delta = CA - DR }
        var Delta = 1/delta
        var Pr    = Math.random()
        if (Pr > Delta) { break } else {
          var s = random(N.findings)
          CA += s.difficulty
          out.signs[N.step] = clone(s)
        }
      }
    }
    out.DR = DR; out.CA = CA; out.variant = _; out.disease = disease; out.system = m.system;
    return out;
  }

  var render = function() {
    var systems = [];
    for (var k in chunks.clinicalSequencing.diseases) {
      var system = chunks.clinicalSequencing.diseases[k].system
      if (systems.indexOf(system) == -1) {
        systems.push(system)
      }
    };
    systems.unshift('random'); // console.log('Systems to test are: ' + systems.concat() + '.')
    
    var d = ''
    d += '<div id="CSQ-question">Please select a system to examine:</div>'
    d += '<div id="CSQ-datum"></div>'
    d += '<div id="CSQ-categories">'
    for (var i = 0; i < systems.length; i++) {
      d += '<div id="CSQ-sys-' + systems[i] + '" class="CSQ-system"'
      d += ' onclick="chunks.clinicalSequencing.chooseSystem(\'' + systems[i] + '\')">' + systems[i].toProperCase() + '</div>'
    }
    d += '</div>'
    $('#board').append(d)
  }

  var chooseSystem = function(system) {
    var system = system;
    compile();
    // console.log(chunks.clinicalSequencing.library);
    if (system == 'random') {
      system = randomProperty(chunks.clinicalSequencing.library)[1]; // console.log(system);
    }
    if (typeof chunks.clinicalSequencing.library[system] == 'undefined') { console.log('System not located in library: ' + system + '.'); return };
    var t = chunks.clinicalSequencing.library[system];
    var u = randomProperty(t)[1]; // console.log(t); console.log(u);

    // Generate the Question here!
    chunks.clinicalSequencing.current = elect(u);
    chunks.clinicalSequencing.currentSteps = chunks.clinicalSequencing.examinations[chunks.clinicalSequencing.current.system] || {};
    chunks.clinicalSequencing.currentSteps = chunks.clinicalSequencing.currentSteps.steps || [];
    chunks.clinicalSequencing.step = 0;

    var d = ''

    d += '<div id="CSQ-panel"><div id="CSQ-yes" onclick="chunks.clinicalSequencing.yes()">Yes</div>'
    d += '<div id="CSQ-no" onclick="chunks.clinicalSequencing.no()">No</div>'
    d += '<div id="CSQ-next" onclick="chunks.clinicalSequencing.initiate()">Start</div></div>'
    d += ''
    $('#board').append(d);

    $('#CSQ-categories').css('display','none');
    $('#CSQ-question').text('').append('Generating stem...');
    $('#CSQ-datum').text('');
    
    let gender = 'male'; if (Math.random() > 0.5) { gender = 'female' };
    var patientName = namey.get({with_surname: true, type: gender, 
      callback: function(n) {
        var stem = ''
        if (gender == 'male') { stem += 'Mr. ' }
        if (gender == 'female') { stem += 'Mrs. ' }
        stem += n[0] + ' is a '
        var age = randomNumber(40, 70);
        stem += age + ' year old '
        if (gender == 'male') { stem += 'gentleman ' }
        if (gender == 'female') { stem += 'lady ' }
        stem += 'who presents with '
        if (typeof chunks.clinicalSequencing.examinations[system] != 'undefined' &&
            typeof chunks.clinicalSequencing.examinations[system].stems != 'undefined') {
          var x = random(chunks.clinicalSequencing.examinations[system].stems)
          stem += x
        }
        stem += '.'
        // console.log(stem)
        
        stem += '<br/><br/> Please examine '
        if (gender == 'male') { stem += 'his ' }
        if (gender == 'female') { stem += 'her ' }
        stem += system + ' system.';
        
        chunks.clinicalSequencing.current.patient = {name: n[0], age: age, gender: gender};
        chunks.clinicalSequencing.current.stem    = stem;
        $('#CSQ-datum').append(stem);
        $('#CSQ-question').text('');
      } 
    });
  }

  var compile = function() {
    var systems = {};
    var t       = chunks.clinicalSequencing.diseases
    for (var k in t) {
      systems[t[k].system] = systems[t[k].system] || {}
      systems[t[k].system][k] = t[k]
    }
    chunks.clinicalSequencing.library = clone(systems);
    return systems;
  }

  var selectSystem = function(system) {
    
  }

  var generate = function() {
    
  }

  var initiate = function() {
    var m = $('#CSQ-next').text()
    if (m == 'Start') {
      $('#CSQ-datum').text('');
      $('#CSQ-next').text('First step is...');
      $('#CSQ-question').text('You wash your hands and introduce yourself to the patient.');
    } else if ($('#CSQ-next').text() == 'First step is...') {
      $('#CSQ-next').text('Next step is...');
      $('#CSQ-no').css('display','block')
      $('#CSQ-yes').css('display','block')
      $('#CSQ-next').css('display','none')
      showStep(chunks.clinicalSequencing.step);
      chunks.clinicalSequencing.step += 1;
    } else if ($('#CSQ-next').text() == 'Present your case...') {
      loop();
      $('#CSQ-next').text('Finish');
      $('#CSQ-no').css('display','none');
      $('#CSQ-yes').css('display','none');
    } else if ($('#CSQ-next').text() == 'Finish') {
      // FINISH, summary table, reset
      chunks.clinicalSequencing.clock.allow = false;
    } else {
      $('#CSQ-datum').text('').removeClass('error');
      $('#CSQ-no').css('display','block')
      $('#CSQ-yes').css('display','block')
      $('#CSQ-next').css('display','none')
      showStep(chunks.clinicalSequencing.step);
      chunks.clinicalSequencing.step += 1;
    }
  }

  var yes = function() {
    if ($('#CSQ-question').text() == 'Is there anything else you would like to do?') {
      $('#CSQ-question').text('Ok, please present your case.');
      showclock();
    } else {
      checkSign($('#CSQ-question').text()); 
    }
    $('#CSQ-no').css('display','none')
    $('#CSQ-yes').css('display','none')
    $('#CSQ-next').css('display','block')
  }

  var no = function() {
    if ($('#CSQ-question').text() == 'Is there anything else you would like to do?') {
      $('#CSQ-question').text('Ok, please present your case.');
      showclock();
    } else {
      // checkSign($('#CSQ-question').text());
      
      var t = chunks.clinicalSequencing.current;
      var u = t.signs || {};
      var Q = $('#CSQ-question').text()
      // console.log(action); console.log(u); console.log(u[action]);
      if (typeof u[Q] == 'undefined') {
        var R = chunks.clinicalSequencing.examinations[chunks.clinicalSequencing.current.system].missed
console.log(R)
        if (typeof R[Q] != 'undefined') {
          $('#CSQ-datum').text(R[Q]).addClass('error')
        } else {
          $('#CSQ-datum').text('You missed checking for this sign.').addClass('error');
        }
      } else {
        $('#CSQ-datum').text('You missed checking for this sign.').addClass('error');
      }
    }
    // $('#CSQ-question').text('');
    $('#CSQ-no').css('display','none')
    $('#CSQ-yes').css('display','none')
    $('#CSQ-next').css('display','block')
  }

  var showStep = function(n) {
    var c = chunks.clinicalSequencing.currentSteps;
    if (typeof c[n] == 'undefined') {
      if (n > (c.length - 1)) {
        completeExamination()
      } else { console.log('Step not found. [showStep]'); return };
    };
    var msg = c[n];
    $('#CSQ-question').text(msg);
  }
  
  var checkSign = function(action) {
    var t = chunks.clinicalSequencing.current;
    var u = t.signs || {};
    // console.log(action);
    // console.log(u);
    // console.log(u[action]);
    if (typeof u[action] == 'undefined') {
      // check for defaults
      var Q = $('#CSQ-question').text()
      var R = chunks.clinicalSequencing.examinations[chunks.clinicalSequencing.current.system].defaults
      if (typeof R[Q] != 'undefined') {
        // console.log(R[Q])
        var verb  = R[Q];
        var rtags = R[Q].match(/\{\d+,\d+}/g)
        if (rtags) {
          for (var p in rtags) {
            var jc = rtags[p],
                jd = jc.match(/\d+/g);
            var je = randomNumber(parseInt(jd[0]), parseInt(jd[1]));
            // console.log(je); console.log(jc)
            verb = verb.replace(jc, je)
            // console.log(verb)
          }
        } else {
          rtags = R[Q].match(/\{\d+,\d+,\d+}/g)
          if (rtags) {
            for (var p in rtags) {
              var jc = rtags[p]
                  jd = jc.match(/\d+/g);
              var n  = parseInt(jd[2]);
              var je = randomNumber(parseInt(jd[0]) / n, parseInt(jd[1]) / n) * n;
              verb = verb.replace(jc, je);
            }
          }
        }
        $('#CSQ-datum').text(verb);
      } else {
        $('#CSQ-datum').text('You note nothing important.');
      }
    } else {
      // console.log(u[action]);
      $('#CSQ-datum').text(u[action].finding);
    }
  }
  
  var completeExamination = function() {
    $('#CSQ-question').text('Is there anything else you would like to do?');
    $('#CSQ-next').text('Present your case...');
  }
  
  var showclock = function() {
    $('#board').append('<div id="CSQ-shotclock">00:00</div>')
  }

  var shotclock = function() {

  }

  var loop = function() {
    if (chunks.clinicalSequencing.clock.allow) {
      chunks.clinicalSequencing.clock.current += 1
      chunks.clinicalSequencing.clock.identity = setTimeout(loop, chunks.clinicalSequencing.clock.interval)

      var n = chunks.clinicalSequencing.clock.current;
      var m = n % 60;
      var L = Math.floor(n / 60);

      var s = lpad(L, 2, '0') + ':' + lpad(m, 2, '0')

      $('#CSQ-shotclock').text(s)
    }
  }

  return {
    clock        : {
      interval   : 1000,
      duration   : 3 * 60 + 1,
      current    : 0, // 3 * 60 + 1,
      identity   : false,
      allow      : true,
    },
    elect   : elect,
    render  : render,
    initiate: initiate,
    yes     : yes,
    no      : no,
    chooseSystem: chooseSystem,
  }
})()
