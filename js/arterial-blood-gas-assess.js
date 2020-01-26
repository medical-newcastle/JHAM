
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.arterialBloodGas = (function(f) {

   var compare = function() {
     var num = chunks.arterialBloodGas.question;
     var ans = chunks.arterialBloodGas.answer;
     var o = ans[0];
     var t = ans[1];
     var H = false
     var R = false
     var C = false
     var I = false
     var tH = false
     var tR = false

     var fx = function(item) { return $(item).hasClass('active') }

     if (fx('#acidity-acidosis')) {
       H = 'acidosis'
     } else if (fx('#acidity-normal')) {
       H = 'normal'
     } else if (fx('#acidity-alkalosis')) {
       H = 'alkalosis'
     }
     if (fx('#primary-respiratory')) {
       R = 'respiratory'
     } else if (fx('#primary-metabolic')) {
       R = 'metabolic'
     }
     if (fx('#chronicity-acute')) {
       C = 'acute'
     } else if (fx('#chronicity-chronic')) {
       C = 'chronic'
     }
     if (fx('#compensation-appropriate')) {
       I = 'complete'
     } else if (fx('#compensation-inappropriate')) {
       I = 'incomplete'
     }
     if (fx('#secondaryAcidity-acidosis')) {
       tH = 'acidosis'
     } else if (fx('#secondaryAcidity-alkalosis')) {
       tH = 'alkalosis'
     }
     if (fx('#secondaryDeficit-respiratory')) {
       tR= 'respiratory'
     } else if (fx('#secondaryDeficit-metabolic')) {
       tR= 'metabolic'
     }
     var score = 0
     // scoring primary
     if (o.acidity == 'normal') {
      if (H == 'normal') {
        score = 1
      } else {
        score = 0
      } 
     } else {
      if (o.acidity == H) {
        score = 1
      } else {
        score = 0
      }
     }
     if (o.primary == R) {
      score *= 1
     } else if (o.acidity == 'normal') {
      score *= 1
     } else {
      score *= 0.5
     }
     if (o.chronicity == C) {
      score *= 1
     } else if (o.primary == 'metabolic') {
      score *= 1
     } else {
      score *= 0.75
     }
     if (o.compensation == I) {
      score *= 1.5
     }
     // scoring secondary
     if (t.secondary == tR) {
      score *= 1.5
     } else {
      score *= 1
     }
     if (t.acidity == tH) {
      score *= 1.5
     } else {
      score *= 1
     }
  
     // don't overpunish for complicated cases
     if (score == 0 && o.compensation == 'incomplete' && 7.45 >= num.pH && num.pH >= 7.35 && H == 'normal') {
      if (num.pCO2 > 50) { score = 0 }
      else if (num.HCO3 < 15) { score = 0 }
      else { score = 0.5 }
     }

    if (score == undefined) { score = 0 }
    return score
   }   

   var assess = function() {
     if ($('#assess').hasClass('disabled')) { return }
     var a = compare();
     // console.log(a)
     // console.log(chunks.arterialBloodGas.answer)

     chunks.arterialBloodGas.score += a;
     chunks.arterialBloodGas.updateRender('accrete-score');
     chunks.arterialBloodGas.updateRender('accrete-points', a);
     if (a > 0) { chunks.arterialBloodGas.correct += 1 };

     renderAssessment();
     $('#assess').addClass('disabled')
   }

   var renderAssessment = function() {
     var ans = chunks.arterialBloodGas.answer;
     var o = ans[0];
     var t = ans[1];
     var fx = function(item) { return $(item).hasClass('active') }
     var answer = function(item) { $(item).addClass('answer') }
     var invalidate = function(item) { $(item).addClass('incorrect') }
     var correct = function(item) { $(item).addClass('correct') }

     if (o.acidity == 'normal') {
       if (fx('#acidity-normal')) {
         correct('#acidity-normal')
       } else {
         answer('#acidity-normal')
         if (fx('#acidity-acidosis')) { invalidate('#acidity-acidosis') }
         if (fx('#acidity-alkalosis')) { invalidate('#acidity-alkalosis') }
       }
     } else if (o.acidity == 'acidosis') {
       if (fx('#acidity-acidosis')) {
         correct('#acidity-acidosis')
       } else {
         answer('#acidity-acidosis')
         if (fx('#acidity-normal')) { invalidate('#acidity-normal') }
         if (fx('#acidity-alkalosis')) { invalidate('#acidity-alkalosis') }
       }
     } else if (o.acidity == 'alkalosis') {
       if (fx('#acidity-alkalosis')) {
         correct('#acidity-alkalosis')
       } else {
         answer('#acidity-alkalosis')
         if (fx('#acidity-normal')) { invalidate('#acidity-normal') }
         if (fx('#acidity-acidosis')) { invalidate('#acidity-acidosis') }
       }
     }

     if (o.primary == 'respiratory') {
       if (fx('#primary-respiratory')) {
         correct('#primary-respiratory')
       } else {
         answer('#primary-respiratory')
         if (fx('#primary-metabolic')) { invalidate('#primary-metabolic') }
       }
     } else if (o.primary == 'metabolic') {
       if (fx('#primary-metabolic')) {
         correct('#primary-metabolic')
       } else {
         answer('#primary-metabolic')
         if (fx('#primary-respiratory')) { invalidate('#primary-respiratory') }
       }
     }

     if (o.chronicity == 'acute') {
       if (fx('#chronicity-acute')) {
         correct('#chronicity-acute')
       } else {
         answer('#chronicity-acute')
         if (fx('#chronicity-chronic')) { invalidate('#primary-chronic') }
       }
     } else if (o.chronicity == 'chronic') {
       if (fx('#chronicity-chronic')) {
         correct('#chronicity-chronic')
       } else {
         answer('#chronicity-chronic')
         if (fx('#chronicity-acute')) { invalidate('#primary-acute') }
       }
     }

     if (o.compensation == 'complete') {
       if (fx('#compensation-appropriate')) {
         correct('#compensation-appropriate')
       } else {
         answer('#compensation-appropriate')
         if (fx('#compensation-inappropriate')) { invalidate('#compensation-inappropriate') }
       }
     } else if (o.compensation == 'incomplete') {
       if (fx('#compensation-inappropriate')) {
         correct('#compensation-inappropriate')
       } else {
         answer('#compensation-inappropriate')
         if (fx('#compensation-appropriate')) { invalidate('#compensation-appropriate') }
       }
     }
   }

   chunks.arterialBloodGas.compare = compare;
   chunks.arterialBloodGas.assess  = assess;
   chunks.arterialBloodGas.score   = 0;
   chunks.arterialBloodGas.correct = 0;
   return chunks.arterialBloodGas;

})(chunks.arterialBloodGas = chunks.arterialBloodGas || {})
