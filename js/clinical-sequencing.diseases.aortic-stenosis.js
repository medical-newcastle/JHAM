
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Aortic stenosis'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step: 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 2, finding:'You hear a systolic murmur.'},
        {difficulty: 3, finding:'You hear a grade 3/6 systolic murmur.'}, // loudness of murmur does not predict severity!
        {difficulty: 3, finding:'You hear an ejection systolic murmur.'},
        {difficulty: 4, finding:'You hear a grade 2/6 ejection systolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'You hear a systolic murmur.'},
        {difficulty: 3, finding:'You hear a grade 3/6 systolic murmur.'},
        {difficulty: 3, finding:'You hear an ejection systolic murmur.'},
        {difficulty: 4, finding:'You hear a grade 2/6 ejection systolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the left upper sternal edge.',
      findings: [
        {difficulty: 2, finding:'You hear a systolic murmur.'},
        {difficulty: 3, finding:'You hear a grade 3/6 systolic murmur.'},
        {difficulty: 3, finding:'You hear an ejection systolic murmur.'},
        {difficulty: 4, finding:'You hear a grade 2/6 ejection systolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the right upper sternal edge.',
      findings: [
        {difficulty: 1, finding:'You hear a systolic murmur.'},
        {difficulty: 2, finding:'You hear a grade 3/6 systolic murmur.'},
        {difficulty: 2, finding:'You hear an ejection systolic murmur.'},
        {difficulty: 3, finding:'You hear a grade 3/6 ejection systolic murmur heard loudest in this region.'},
      ],
    },
    { step    : 'Listen with diaphragm over the carotids.',
      findings: [
        {difficulty: 2, finding:'The murmur you heard radiates up to the carotids.'},
      ],
    },
  ],
  variants  : [
    { variant : 'severe',
      step    : 'Palpate over the carotids bilaterally, feeling the nature of the arterial pulses.',
      findings: [
        {difficulty: 4, finding:'You suspect the pulse is slow-rising.'},
      ],
    },
    { variant : 'severe',
      step    : 'Palpate the apex beat at the fifth intercostal space in the mid-clavicular line.',
      findings: [
        {difficulty: 2, finding:'The apex beat is displaced to the fifth intercostal space, anterior axillary line.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 4, finding:'You hear a late-peaking ejection systolic murmur.'},
        {difficulty: 4, finding:'You hear a late-peaking ejection systolic murmur. You think you hear a gallop rhythm.'},
        {difficulty: 5, finding:'You hear a late-peaking grade 3/6 ejection systolic murmur.'},
        {difficulty: 6, finding:'You hear a late-peaking grade 2/6 ejection systolic murmur.'},
        {difficulty: 5, finding:'You hear a late-peaking ejection systolic murmur. You think you hear a fourth heart sound.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the right upper sternal edge.',
      findings: [
        {difficulty: 4, finding:'You hear a late-peaking ejection systolic murmur.'},
        {difficulty: 4, finding:'You hear a late-peaking ejection systolic murmur. You think you hear a gallop rhythm.'},
        {difficulty: 5, finding:'You hear a late-peaking grade 3/6 ejection systolic murmur.'},
        {difficulty: 6, finding:'You hear a late-peaking grade 2/6 ejection systolic murmur.'},
        {difficulty: 5, finding:'You hear a late-peaking ejection systolic murmur. You think you hear a fourth heart sound.'},
      ],
    },
    { variant : 'severe',
      step    : 'Palpate the upper right sternal edge.',
      findings: [
        {difficulty: 4, finding:'You feel an aortic thrill over the right upper sternal edge.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen to the loudest valvular area on full expiration.',
      findings: [
        {difficulty: 3, finding:'The murmur you heard is accentuated.'},
        {difficulty: 6, finding:'The second heart sound splitting is accentuated.'},
        {difficulty: 7, finding:'The murmur you heard is accentuated and the second heart sound splitting is longer.'},
      ],
    },
    { variant : 'severe',
      step    : 'Take the blood pressure.',
      findings: [
        {difficulty: 1, finding:'The blood pressure is 140/105.'},
      ],
    },
    { variant : 'severe',
      step    : 'Ausculate the bases of the lungs.',
      findings: [
        {difficulty: 3, finding:'You hear bilateral crackles at the base of the lungs.'},
      ],
    },
    { variant : 'severe',
      step    : 'Palpate the lower shins for edema, note whether it is pitting & watch for causing pain.',
      findings: [
        {difficulty: 3, finding:'There is pitting edema bilaterally.'},
      ],
    },
  ]
}
