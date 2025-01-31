const char = createSorcere('Mago')
const littleMonster = createLittleMonster()
stage.start(
    char,
    littleMonster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)