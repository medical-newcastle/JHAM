
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Hypertrophic obstructive cardiomyopathy'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step: 'Palpate the radial artery & measure the heart rate, noting irregularity.',
      findings: [
        {difficulty: 2, finding:'There is sharp, jerky peripheral pulse.'},
      ],
    },
    { step: 'Examine the jugular venous pressure waveform.',
      findings: [
        {difficulty: 2, finding:'There is a prominent a-wave.'},
      ],
    },
    { step: 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 2, finding:'There is a double apical impulse.'},
        {difficulty: 4, finding:'There is a double apical impulse. There is a heaving nature to the apex beat.'},
        {difficulty: 4, finding:'There is a triple apical impulse.'},
      ],
    },
    { step: 'Listen with diaphragm over the apex.',
      findings: [
        {difficulty: 1, finding:'There is a pansystolic murmur heard here.'},
        {difficulty: 4, finding:'There is a pansystolic murmur heard here. There is a fourth heart sound.'},
      ],
    },
    { step: 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'There is a systolic ejection murmur.'},
        {difficulty: 3, finding:'There is a grade 2/6 systolic ejection murmur.'},
        {difficulty: 4, finding:'There is a grade 2/6 ejection murmur heard late in systole.'},
      ],
    },
    { step: 'Listen with diaphragm over the left upper sternal edge.',
      findings: [
        {difficulty: 2, finding:'There is a systolic ejection murmur.'},
      ],
    },
    { step: 'Instruct the patient to Valsalva & listen for an accentuated murmur.',
      findings: [
        {difficulty: 3, finding:'You hear a systolic murmur that accentuates with the Valsalva maneuver.'},
      ],
    },
  ],
  variants  : [
  ]
}
