
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.diseases = typeof chunks.clinicalSequencing.diseases != 'undefined' ? chunks.clinicalSequencing.diseases : {}

chunks.clinicalSequencing.diseases['Ventral septal defect'] = {
  _variants  : ['mild','severe'],
  system     : 'cardiac',
  examination: [
    { step    : 'Palpate the left sternal border for a heave.',
      findings: [
        {difficulty: 2, finding:'There is a parasternal thrill.'},
      ],
    },
    { step: 'Listen with diaphragm over the left lower sternal edge.',
      findings: [
        {difficulty: 2, finding:'There is a pansystolic murmur.'},
        {difficulty: 3, finding:'There is a grade 2/6 pansystolic murmur.'},
      ],
    },
    { step: 'Listen with diaphragm over the left upper sternal edge.',
      findings: [
        {difficulty: 2, finding:'There is a pansystolic murmur.'},
        {difficulty: 3, finding:'There is a grade 2/6 pansystolic murmur.'},
        {difficulty: 3, finding:'There is a pansystolic murmur. The second heart sound is merged.'},
      ],
    },
  ],
  variants  : [
    { variant : 'severe',
      step    : 'Inspect the room for oxygen.',
      findings: [
        {difficulty: 3, finding:'{Patient} has a bluish skin color. {They are} not using oxygen.'},
      ],
    },
    { variant : 'severe',
      step    : 'Inspect the hands for signs of infective endocarditis, Marfanoid features & autoimmune diseases.',
      findings: [
        {difficulty: 2, finding:'You suspect there is clubbing of the fingernails.'},
      ],
    },
    { variant : 'severe',
      step    : 'Examine the mouth for a high-arched palate, poor dentition & signs of autoimmune disease.',
      findings: [
        {difficulty: 2, finding:'There is central cyanosis.'},
      ],
    },
    { variant : 'severe',
      step    : 'Note the characteristics of the apex beat.',
      findings: [
        {difficulty: 2, finding:'The apex beat thrusts against your hand.'},
      ],
    },
    { variant : 'severe',
      step    : 'Listen with diaphragm over the left upper sternal edge',
      findings: [
        {difficulty: 2, finding:'There is a loud P2.'},
      ],
    },
  ]
}
