
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.arterialBloodGas = (function(f) {

 const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
   };

 const round = (value, decimals) => {
   return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
   };

 const minmax = (min, max, spec) => {
   var x = Math.random() * (max - min) + min;
   if (spec) { x = round(x, spec) };
   return x; };

 const xAcidity = (step) => {
   var n = random(1, 3);
   if (step > 1) { n = random(2, 3) }
   switch(n) {
     case 3: return 'alkalosis';
     case 2: return 'acidosis';
     case 1: return 'normal';
   }};

 const xPrimary = (acidity, step) => {
   var n = random(2, 3);
   if (acidity == 'normal') { n = 1 };
   switch(n) {
     case 3: return 'metabolic';
     case 2: return 'respiratory';
     case 1: return 'normal';
   }};

 const xChronicity = (primary, acidity, step) => {
   var n = random(2, 3);
   if (acidity == 'normal') { n = 1 };
   if (primary == 'metabolic') { n = 1 };
   switch(n) {
     case 3: return 'chronic';
     case 2: return 'acute';
     case 1: return 'normal';
   }}

 const xCompensation = (chronicity, primary, acidity, step) => {
   var n = random(2, 8);
   if (acidity == 'normal') { n = 1 };
   switch(true) {
     case (n >= 8): return 'incomplete';
     case (n < 8 && n > 1): return 'complete';
     case (n <= 1): return 'normal';
   }}

 const xGenerate = (s) => {
   var o = s[0];
   var acidity       = 7.40;
   var carbonDioxide = 40;
   var bicarbonate   = 24;
   var partialOxygen = 93;
   var saturation    = 99;
   var lactate       = 1.0;
   
   switch(true) {
     case (o.compensation == 'complete' && o.chronicity == 'acute' && o.primary == 'respiratory' && o.acidity == 'acidosis'):
     // acute respiratory acidosis
        carbonDioxide = minmax(48.0, 100.0, 1);
        acidity       = 7.4 + 0.0065 * (40 - carbonDioxide);
        bicarbonate   = 24 + ((carbonDioxide - 40) / 10) * 1;
        partialOxygen = minmax(35.0, 150.0);
        saturation    = minmax(84.0, 99.9);
        lactate       = minmax(0.4, 2.4);
        break;
     case (o.compensation == 'complete' && o.chronicity == 'chronic' && o.primary == 'respiratory' && o.acidity == 'acidosis'):
     // chronic respiratory acidosis
        carbonDioxide = minmax(48.0, 115.0, 1);
        acidity       = 7.4 + 0.0022 * (40 - carbonDioxide);
        bicarbonate   = 24 + ((carbonDioxide - 40) / 10) * 3.5;
        partialOxygen = minmax(35.0, 150.0);
        saturation    = minmax(84.0, 99.9);
        lactate       = minmax(0.4, 3.2);
        break;
     case (o.compensation == 'complete' && o.chronicity == 'acute' && o.primary == 'respiratory' && o.acidity == 'alkalosis'):
     // acute respiratory alkalosis
        carbonDioxide = minmax(7.0, 32.0);
        acidity       = 7.4 + 0.008 * (40 - carbonDioxide);
        bicarbonate   = 24 - 2 * ((40 - carbonDioxide) / 10);
        if (bicarbonate < 12) { bicarbonate = 12.0 }
        partialOxygen = minmax(90.0, 150.8);
        saturation    = minmax(99.0, 100.0);
        lactate       = minmax(0.5, 1.6);
        break;
     case (o.compensation == 'complete' && o.chronicity == 'chronic' && o.primary == 'respiratory' && o.acidity == 'alkalosis'):
     // chronic respiratory alkalosis
        carbonDioxide = minmax(7.0, 32.0);
        acidity       = 7.4 + 0.008 * (40 - carbonDioxide);
        bicarbonate   = 24 - 5 * ((40 - carbonDioxide) / 10);
        if (bicarbonate < 12) { bicarbonate = 12.0 }
        partialOxygen = minmax(90.0, 150.8);
        saturation    = minmax(99.0, 100.0);
        lactate       = minmax(0.5, 1.6);
        break;
     case (o.compensation == 'complete' && o.chronicity == 'normal' && o.primary == 'metabolic' && o.acidity == 'acidosis'):
     // metabolic acidosis
        bicarbonate   = minmax(8.0, 22.0);
        carbonDioxide = 1.5 * bicarbonate + 8;
        acidity       = 6.1 + Math.log10(bicarbonate / (0.03 * carbonDioxide));
        if (acidity >= 7.34) { acidity = 7.34 };
        partialOxygen = minmax(75.0, 150.8);
        saturation    = minmax(95.0, 100.0);
        lactate       = minmax(0.5, 15.0);
        break;
     case (o.compensation == 'complete' && o.chronicity == 'normal' && o.primary == 'metabolic' && o.acidity == 'alkalosis'):
     // metabolic alkalosis
        bicarbonate   = minmax(31.0, 45.0);
        carbonDioxide = 0.7 * bicarbonate + 20 + minmax(-5, 5);
        acidity       = 6.1 + Math.log10(bicarbonate / (0.03 * carbonDioxide));
        partialOxygen = minmax(75.0, 150.8);
        saturation    = minmax(95.0, 100.0);
        lactate       = minmax(0.5, 2.4);
        break;
     case (o.compensation == 'incomplete'):
        var secondary = xGenerateIncomplete(s);
        // console.log(secondary);
        return secondary;
        break;
     default:
        acidity = minmax(7.35, 7.45);
        carbonDioxide = minmax(35.0, 45.0);
        bicarbonate   = 0.03 * carbonDioxide * Math.pow(10, (acidity - 6.1));
        partialOxygen = minmax(83.0, 108.8);
        saturation    = minmax(95.0, 99.9);
        lactate       = minmax(0.5, 1.6);
        break;
   }
   return {pH: acidity, pCO2: carbonDioxide, HCO3: bicarbonate, pO2: partialOxygen, SaO2: saturation, lactate: lactate}
   };

 const xGenerateIncomplete = (s) => {
   var o = s[0];
   var t = s[1];
   
   var acidity       = 7.40;
   var carbonDioxide = 40;
   var bicarbonate   = 24;
   var partialOxygen = 93;
   var saturation    = 99;
   var lactate       = 1.0;
   
   switch(true) {
     case (o.chronicity == 'acute' && o.primary == 'respiratory' && o.acidity == 'acidosis'):
        carbonDioxide = minmax(48.0, 100.0);
        acidity       = 7.4 + 0.0065 * (40 - carbonDioxide);
        bicarbonate   = 24 + ((carbonDioxide - 40) / 10) * 1;
        partialOxygen = minmax(35.0, 150.0);
        saturation    = minmax(84.0, 99.9);
        lactate       = minmax(0.4, 2.4);
        if (o.acidity == 'acidosis') {
          bicarbonate = 24 + ((carbonDioxide - 40) / 10) * minmax(0.55, 0.88)
        } else if (o.acidity == 'alkalosis') {
          bicarbonate -= minmax(3.3, 13.0)
        }
        break;
     case (o.chronicity == 'chronic' && o.primary == 'respiratory' && o.acidity == 'acidosis'):
        carbonDioxide = minmax(48.0, 115.0);
        acidity       = 7.4 + 0.0022 * (40 - carbonDioxide);
        bicarbonate   = 24 + ((carbonDioxide - 40) / 10) * 3.5;
        partialOxygen = minmax(35.0, 150.0);
        saturation    = minmax(84.0, 99.9);
        lactate       = minmax(0.4, 3.2);
        if (o.acidity == 'acidosis') {
          bicarbonate = 24 + ((carbonDioxide - 40)/10) * minmax(1.9, 2.4)
        } else if (o.acidity == 'alkalosis') {
          bicarbonate += minmax(3.3, 13.0)
        }
        break;
     case (o.chronicity == 'acute' && o.primary == 'respiratory' && o.acidity == 'alkalosis'):
        carbonDioxide = minmax(7.0, 32.0);
        acidity       = 7.4 + 0.008 * (40 - carbonDioxide);
        bicarbonate   = 24 - 2 * ((40 - carbonDioxide) / 10);
        partialOxygen = minmax(90.0, 150.8);
        saturation    = minmax(99.0, 100.0);
        lactate       = minmax(0.5, 1.6);
        if (o.acidity == 'acidosis') {
          bicarbonate = 24 - ((40 - carbonDioxide)/10) * minmax(0.5, 1.7)
        } else if (o.acidity == 'alkalosis') {
          bicarbonate += minmax(3.3, 8.0)
        }
        break;
     case (o.chronicity == 'chronic' && o.primary == 'respiratory' && o.acidity == 'alkalosis'):
        carbonDioxide = minmax(7.0, 32.0);
        acidity       = 7.4 + 0.008 * (40 - carbonDioxide);
        bicarbonate   = 24 - 5 * ((40 - carbonDioxide) / 10);
        if (bicarbonate < 12) { bicarbonate = 12.0 };
        partialOxygen = minmax(90.0, 150.8);
        saturation    = minmax(99.0, 100.0);
        lactate       = minmax(0.5, 1.6);
        if (o.acidity == 'acidosis') {
          bicarbonate = 24 - ((40 - carbonDioxide)/10) * minmax(3.1, 4.5)
        } else if (o.acidity == 'alkalosis') {
          bicarbonate += minmax(3.3, 8.0)
        }
        break;
     case (o.primary == 'metabolic' && o.acidity == 'acidosis'):
        acidity       = minmax(6.90, 7.35);
        bicarbonate   = minmax(8.0, 22.0);
        carbonDioxide = 1.5 * bicarbonate + 8;
        partialOxygen = minmax(75.0, 150.8);
        saturation    = minmax(95.0, 100.0);
        lactate       = minmax(0.5, 15.0);
        if (o.acidity == 'acidosis') {
          carbonDioxide = 1.5 * bicarbonate + 8 + minmax(4.0, 10.0);
        } else if (o.acidity == 'alkalosis') {
          carbonDioxide -= minmax(3.0, 5.0);
          if (carbonDioxide < 5) { carbonDioxide = 5.0 };
        }
        break;
     case (o.primary == 'metabolic' && o.acidity == 'alkalosis'):
        bicarbonate   = minmax(24.0, 45.0);
        carbonDioxide = 0.7 * bicarbonate + 20 + minmax(-5.0, 5.0);
        acidity       = 6.1 + Math.log10(bicarbonate/(0.03 * carbonDioxide));
        partialOxygen = minmax(75.0, 150.8);
        saturation    = minmax(95.0, 100.0);
        lactate       = minmax(0.5, 2.4);
        if (o.acidity == 'acidosis') {
          carbonDioxide = 0.7 * bicarbonate + 20 + minmax(5.0, 15.0) + minmax(-5.0, 5.0);
        } else if (o.acidity == 'alkalosis') {
          carbonDioxide = 0.7 * bicarbonate + 20 - minmax(5.0, 15.0) + minmax(-5.0, 5.0);
          if (carbonDioxide < 5) { carbonDioxide = 5.0 };
        }
        break;
   }

   return {pH: acidity, pCO2: carbonDioxide, HCO3: bicarbonate, pO2: partialOxygen, SaO2: saturation, lactate: lactate}
   };

 const xExemplify = () => {
   var one  = {};
   var two  = {};
   var step = 1;
   var acidity      = xAcidity(step);
   var primary      = xPrimary(acidity, step);
   var chronicity   = xChronicity(primary, acidity, step);
   var compensation = xCompensation(chronicity, primary, acidity, step);
   
   if (compensation == 'incomplete') {
     step = 2;
     two.acidity    = xAcidity(step);
     two.secondary  = 'metabolic';
     if (primary == 'metabolic') { two.secondary = 'respiratory' };
     two.chronicity = xChronicity(two.secondary, two.acidity, step);
     two.compensation = 'secondary';
   }
   
   one.acidity      = acidity;
   one.primary      = primary;
   one.chronicity   = chronicity;
   one.compensation = compensation;
   
   return [one, two];
   };
   
   
   chunks.arterialBloodGas.xGenerate = xGenerate;
   chunks.arterialBloodGas.xExemplify = xExemplify;
   return chunks.arterialBloodGas;
   
} )(chunks.arterialBloodGas = chunks.arterialBloodGas || {})

chunks.arterialBloodGas.xQuestion = function() {
  chunks.arterialBloodGas.answer = chunks.arterialBloodGas.xExemplify()
  chunks.arterialBloodGas.question = chunks.arterialBloodGas.xGenerate( chunks.arterialBloodGas.answer )
}

chunks.arterialBloodGas.outcome = {
  score    : 0,
  questions: 0,
}

console.log(chunks.arterialBloodGas)
