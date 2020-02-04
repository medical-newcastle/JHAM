
chunks = typeof chunks != 'undefined' ? chunks : {}

chunks.clinicalSequencing = typeof chunks.clinicalSequencing != 'undefined' ? chunks.clinicalSequencing : {}

chunks.clinicalSequencing.examinations = typeof chunks.clinicalSequencing.examinations != 'undefined' ? chunks.clinicalSequencing.examinations : {}

chunks.clinicalSequencing.examinations.cardiac = {}

var t = []
    t.push('Inspect the room for oxygen.')
    t.push('Inspect the hands for signs of infective endocarditis, Marfanoid features & autoimmune diseases.')
    t.push('Palpate the radial artery & measure the heart rate, noting irregularity.')
    t.push('Palpate for radial-radial delay & radial-femoral delay.')
    t.push('Ask for permission to & test for a collapsing pulse.')
    t.push('Take the blood pressure.')
    t.push('Examine the eyes for xanthelasma & conjunctival pallor of anaemia.')
    t.push('Examine the mouth for a high-arched palate, poor dentition & signs of autoimmune disease.')
    t.push('Examine the jugular venous pressure for its height.')
    t.push('Examine the jugular venous pressure waveform.')

    t.push('Examine the jugular venous pressure while applying the hepatojugular reflux.')
    t.push('Inspect the praecordium for signs of a pacemaker box, a sternotomy wound & scars for ICC insertions.')
    t.push('Palpate the apex beat at the fifth intercostal space in the mid-clavicular line.')
    t.push('Note the characteristics of the apex beat.')
    t.push('Palpate the left sternal border for a heave.')
    t.push('Palpate the upper left sternal edge for a palpable pulmonary pulsation.')
    t.push('Palpate the upper right sternal edge.')
    t.push('Palpate over the carotids bilaterally, feeling the nature of the arterial pulses.')
    t.push('Listen with the bell over the apex, listening for the murmur of mitral stenosis.')
    t.push('Listen with the bell over the axilla, listening for the murmur of mitral stenosis.')

    t.push('Listen with diaphragm over the apex.')
    t.push('Listen with diaphragm over the left lower sternal edge.')
    t.push('Listen with diaphragm over the left upper sternal edge.')
    t.push('Listen with diaphragm over the right upper sternal edge.')
    t.push('Listen with diaphragm over the carotids.')
    t.push('Listen with diaphragm over the axilla.')
    t.push('Listen to the loudest valvular area on full inspiration.')
    t.push('Listen to the loudest valvular area on full expiration.')
    t.push('Listen over the left lower sternal edge with the patient in full expiration.')
    t.push('Instruct the patient to Valsalva & listen for an accentuated murmur.')

    t.push('Listen over the loudest valvular area with isometric handgrip.')
    t.push('Ausculate the bases of the lungs.')
    t.push('Feel for a pulsatile liver.')
    t.push('Palpate the lower shins for edema, note whether it is pitting & watch for causing pain.')

chunks.clinicalSequencing.examinations.cardiac.steps = clone(t)

t = []
t.push('shortness of breath')
t.push('exertional chest pain')
t.push('dizziness and collapse')

chunks.clinicalSequencing.examinations.cardiac.stems = clone(t)

t = {}
t['Palpate the radial artery & measure the heart rate, noting irregularity.'] = 'The heart rate is {60,104,4} beats per minute.'
t['Take the blood pressure.'] = 'The blood pressure is {130,155,5}/{55,85,5} mmHg.'
t['Examine the jugular venous pressure for its height.'] = 'The jugular venous pressure is {1,4} cm.'

chunks.clinicalSequencing.examinations.cardiac.defaults = clone(t)

t = {}
t['Palpate the radial artery & measure the heart rate, noting irregularity.'] = 'You forget to palpate the pulse.'

chunks.clinicalSequencing.examinations.cardiac.missed = clone(t)
