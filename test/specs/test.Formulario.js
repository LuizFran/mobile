
const assert = require('chai').assert;


describe('Navegação', () => {

it('4. Preenchimento de formulários corretamente', async () => {
    await $('~formButton').click();
    await $('~nameField').setValue('João');
    await $('~emailField').setValue('joao@example.com');
    await $('~submitButton').click();
    const successMessage = await $('~successMessage');
    assert.isTrue(await successMessage.isDisplayed(), 'Formulário não foi submetido corretamente');
});
})