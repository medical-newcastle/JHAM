
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Aortic regurgitation'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step: 'Inspect the hands for signs of infective endocarditis, Marfanoid features & autoimmune diseases.',
      findings: [
        {difficulty: 4, finding:'You see faint capillary pulsations on light nail pressure.'},
      ],
    },
    { step: 'Examine the mouth for a high-arched palate, poor dentition & signs of autoimmune disease.',
      findings: [
        {difficulty: 7, finding:'You see pulsation of the uvula'},
      ],
    },
    { step: 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 4, finding:'There is a diffuse, hyperdynamic apex beat.'},
      ],
    },
    { step: 'Palpate over the carotids bilaterally, feeling the nature of the arterial pulses.',
      findings: [
        {difficulty: 5, finding:'There is a palpable double systolic impulse.'},
      ],
    },
    { step: 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 4, finding:'You hear a decrescendo diastolic murmur.'},
        {difficulty: 5, finding:'You hear a grade 2/6 decrescendo diastolic murmur.'},
      ],
    },
    { step: 'Listen to the loudest valvular area on full expiration.',
      findings: [
        {difficulty: 4, finding:'There is an accentuated diastolic murmur.'},
      ],
    },
  ],
  variants  : [
    { variant : 'severe',
      step    : 'Ask for permission to & test for a collapsing pulse.',
      findings: [
        {difficulty: 4, finding:'The peripheral pulse falls away rapidly on palpation.'},
      ],
    },
    { variant : 'severe',
      step    : 'Take the blood pressure.',
      findings: [
        {difficulty: 2, finding:'The blood pressure is {150,175,5}/{45,65,5} mmHg.'},
      ],
    },
    { step: 'Palpate the apex beat at the fifth intercostal space in the mid-clavicular line.',
      findings: [
        {difficulty: 4, finding:'The apex beat is displaced to anterior axillary line.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the apex',
      findings: [
        {difficulty: 3, finding:'There is a low-pitched rumbling murmur during mid-diastole.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the right upper sternal edge.',
      findings: [
        {difficulty: 3, finding:'There is a prolonged descrescendo diastolic murmur.'},
        {difficulty: 5, finding:'There is a prolonged descrescendo diastolic murmur. You hear a third heart sound.'},
        {difficulty: 6, finding:'The second heart sound is quieter than expected. There is a prolonged descrescendo diastolic murmur. You hear a third heart sound.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'You hear a third heart sound.'},
      ],
    },
  ]
}
