
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Tricuspid regurgitation'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step    : 'Examine the jugular venous pressure for its height.',
      findings: [
        {difficulty: 2, finding:'The jugular venous pressure is {3,6} cm.'},
      ],
    },
    { step    : 'Examine the jugular venous pressure waveform.',
      findings: [
        {difficulty: 2, finding:'There are large v-waves.'},
      ],
    },
    { step    : 'Palpate the left sternal border for a heave.',
      findings: [
        {difficulty: 2, finding:'There is a ventricular heave.'},
      ],
    },
    { step    : 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'There is a pansystolic murmur here.'},
        {difficulty: 3, finding:'There is a grade 2/6 pansystolic murmur here.'},
      ],
    },
    { step    : 'Feel for a pulsatile liver.',
      findings: [
        {difficulty: 2, finding:'The liver is ptosed and pulsatile.'},
        {difficulty: 2, finding:'The liver is ptosed and pulsatile. There is shifting dullness on testing.'},
      ],
    },
    { step    : 'Palpate the lower shins for edema, note whether it is pitting & watch for causing pain.',
      findings: [
        {difficulty: 2, finding:' There is marked oedema distally.'},
      ],
    },
  ],
  variants  : [
  ]
}
