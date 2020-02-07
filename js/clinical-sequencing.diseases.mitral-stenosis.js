
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Mitral stenosis'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step: 'Listen with the bell over the apex, listening for the murmur of mitral stenosis.',
      findings: [
        {difficulty: 2, finding:'You hear a diastolic murmur.'},
        {difficulty: 3, finding:'You hear a grade 2/6 diastolic murmur.'},
        {difficulty: 4, finding:'You hear a low-pitched rumbling diastolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 3, finding:'There is an opening snap after the second heart sound.'},
        {difficulty: 4, finding:'You hear a diastolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'You hear a diastolic murmur.'},
        {difficulty: 6, finding:'You hear a grade 2/6 diastolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the right upper sternal edge.',
      findings: [
        {difficulty: 1, finding:'You think you hear a diastolic murmur.'},
        {difficulty: 3, finding:'The first heart sound is soft.'},
        {difficulty: 4, finding:'You hear a grade 2/6 diastolic murmur.'},
      ],
    },
  ],
  variants  : [
    { variant : 'severe',
      step: 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 3, finding:'You feel a diastolic thrill at the apex.'},
        {difficulty: 13, finding:'You can feel a tapping apex beat.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with the bell over the apex, listening for the murmur of mitral stenosis.',
      findings: [
        {difficulty: 3, finding:'The first heart sound is soft.'},
        {difficulty: 4, finding:'An extended diastolic murmur is heard.'},
        {difficulty: 5, finding:'An extended diastolic murmur is heard. The first heart sound is soft.'},
        {difficulty: 5, finding:'There is an early opening snap immediately after the second heart sound. A low-pitched rumbling diastolic murmur is heard.'},
      ],
    },
    { variant : 'severe', // pulmonary hypertension
      step    : 'Palpate the upper left sternal edge for a palpable pulmonary pulsation.',
      findings: [
        {difficulty: 3, finding:'There is a palpable P2.'},
      ],
    },
    { variant : 'severe',
      step    : 'Palpate the lower shins for edema, note whether it is pitting & watch for causing pain.',
      findings: [
        {difficulty: 2, finding:'There is pitting edema bilaterally.'},
      ],
    },
  ]
}
