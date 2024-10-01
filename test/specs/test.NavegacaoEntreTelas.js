

const assert = require('chai').assert;


describe('Navegação', () => {

it('3. Navegação entre telas', async () => {
    await $('~menuButton').click();
    await $('~settingsButton').click();
    const settingsScreen = await $('~settingsScreen');
    assert.isTrue(await settingsScreen.isDisplayed(), 'Falha ao navegar para a tela de configurações');
});

})