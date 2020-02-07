
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Mitral regurgitation'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step: 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'You hear a systolic murmur.'},
        {difficulty: 4, finding:'You hear a pansystolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the right upper sternal edge.',
      findings: [
        {difficulty: 3, finding:'You hear a grade 2/6 pansystolic murmur.'},
      ],
    },
  ],
  variants  : [
    { variant : 'severe',
      step    : 'Palpate the radial artery & measure the heart rate, noting irregularity.',
      findings: [
        {difficulty: 2, finding:'You measure {15,26} beats over 15 seconds. The heartbeat is irregularly irregular in nature.'},
      ],
    },
    { variant : 'severe',
      step    : 'Palpate the apex beat at the fifth intercostal space in the mid-clavicular line.',
      findings: [
        {difficulty: 2, finding:'The apex beat is located at the anterior axillary line in the fifth intercostal space.'},
      ],
    },
    { variant : 'severe',
      step: 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 3, finding:'There is a forceful apex beat.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 4, finding:'There is a pansystolic murmur. You hear an added third heart sound.'},
        {difficulty: 6, finding:'There is a grade 2/6 pansystolic murmur. You hear an added third heart sound.'},
        {difficulty: 7, finding:'There is a grade 2/6 pansystolic murmur. You hear an added third heart sound. The first heart sound is quieter than expected.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the left upper sternal edge.',
      findings: [
        {difficulty: 5, finding:'There is an early second heart sound.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the axilla.',
      findings: [
        {difficulty: 2, finding:'There is a systolic murmur radiating to the axilla.'},
        {difficulty: 4, finding:'There is a pansystolic murmur radiating to the axilla.'},
        {difficulty: 5, finding:'There is a grade 2/6 pansystolic murmur radiating to the axilla.'},
      ],
    },
    { variant : 'severe',
      step    : 'Ausculate the bases of the lungs.',
      findings: [
        {difficulty: 4, finding:'There are crepitations bilaterally.'},
      ],
    },
  ]
}
