
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Mixed mitral disease'] = {
  _variants  : ['stenosis predominant','regurgitant predominant'],
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
        {difficulty: 2, finding:'You hear both a diastolic murmur and a systolic murmur.'},
        {difficulty: 4, finding:'You hear a pansystolic murmur and catch a quiet diastolic murmur.'},
        {difficulty: 4, finding:'You hear a grade 2/6 pansystolic murmur as well as a quiet diastolic murmur.'},
        {difficulty: 6, finding:'You hear a grade 2/6 diastolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the right upper sternal edge.',
      findings: [
        {difficulty: 1, finding:'You think you hear a diastolic murmur.'},
        {difficulty: 3, finding:'There is both a systolic and a diastolic murmur.'},
        {difficulty: 4, finding:'You hear a grade 2/6 diastolic murmur.'},
      ],
    },
    { step    : 'Palpate the upper left sternal edge for a palpable pulmonary pulsation.',
      findings: [
        {difficulty: 3, finding:'There is a palpable P2.'},
      ],
    },
    { step    : 'Ausculate the bases of the lungs.',
      findings: [
        {difficulty: 4, finding:'There are crepitations bilaterally.'},
      ],
    },
    { step    : 'Palpate the radial artery & measure the heart rate, noting irregularity.',
      findings: [
        {difficulty: 2, finding:'You measure {15,26} beats over 15 seconds. The heartbeat is irregularly irregular in nature.'},
      ],
    },
  ],
  variants  : [
    { variant : 'stenosis predominant',
      step: 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 3, finding:'You feel a diastolic thrill at the apex.'},
        {difficulty: 5, finding:'You can feel a tapping apex beat.'},
      ],
    },
    { variant : 'stenosis predominant',
      step    : 'Listen with the bell over the apex, listening for the murmur of mitral stenosis.',
      findings: [
        {difficulty: 3, finding:'The first heart sound is soft.'},
        {difficulty: 4, finding:'An extended diastolic murmur is heard. The first heart sound is harsher than expected.'},
        {difficulty: 5, finding:'An extended diastolic murmur is heard. The first heart sound is soft.'},
        {difficulty: 5, finding:'There is an early opening snap immediately after the second heart sound. A low-pitched rumbling diastolic murmur is heard.'},
      ],
    },
    { variant : 'stenosis predominant',
      step    : 'Palpate the lower shins for edema, note whether it is pitting & watch for causing pain.',
      findings: [
        {difficulty: 2, finding:'There is pitting edema bilaterally.'},
      ],
    },

    { variant : 'regurgitant predominant',
      step    : 'Palpate the apex beat at the fifth intercostal space in the mid-clavicular line.',
      findings: [
        {difficulty: 2, finding:'The apex beat is located at the anterior axillary line in the fifth intercostal space.'},
      ],
    },
    { variant : 'regurgitant predominant',
      step: 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 3, finding:'There is a forceful apex beat.'},
      ],
    },
    { variant : 'regurgitant predominant',
      step    : 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 4, finding:'There is a pansystolic murmur. You hear an added third heart sound.'},
        {difficulty: 6, finding:'There is a grade 2/6 pansystolic murmur. You hear an added third heart sound.'},
        {difficulty: 7, finding:'There is a grade 2/6 pansystolic murmur. You hear an added third heart sound. The first heart sound is quieter than expected.'},
      ],
    },
  ]
}
