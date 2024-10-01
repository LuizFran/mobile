const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page') // pageObject
const SecurePage = require('../pageobjects/secure.page') // pageObject

const assert = require('chai').assert;

describe('Testes de Automação do App Mobile', () => {

    it('1. Testar o fluxo de login com credenciais válidas', async () => {
        await $('~loginButton').click();
        await $('~usernameField').setValue('usuario_teste');
        await $('~passwordField').setValue('senha_teste');
        await $('~submitButton').click();
        const homeScreen = await $('~homeScreen');
        assert.isTrue(await homeScreen.isDisplayed(), 'Falha ao logar com sucesso');
    });

    it('2. Testar fluxo de cadastro com dados válidos', async () => {
        await $('~signupButton').click();
        await $('~usernameField').setValue('novo_usuario');
        await $('~emailField').setValue('email@teste.com');
        await $('~passwordField').setValue('nova_senha');
        await $('~submitButton').click();
        const welcomeScreen = await $('~welcomeScreen');
        assert.isTrue(await welcomeScreen.isDisplayed(), 'Falha ao se cadastrar com sucesso');
    });



    // DICA Adicione mais 6 cenários de teste para cobrir outras funcionalidades principais
    it('5. Testar fluxo de logout...', async () => { /* lógica de teste */ });
    it('6. Testar recuperação de senha...', async () => { /* lógica de teste */ });
    it('7. Testar busca dentro do app...', async () => { /* lógica de teste */ });
    it('8. Testar adição de item ao carrinho...', async () => { /* lógica de teste */ });
    it('9. Testar remoção de item do carrinho...', async () => { /* lógica de teste */ });
    it('10. Testar finalização de compra...', async () => { /* lógica de teste */ });

});

