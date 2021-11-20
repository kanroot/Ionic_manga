import {browser, element, by } from 'protractor';

describe('Prueba Página inicio',  () => {
    beforeEach(async () => {
        await browser.get('/');
    });

    it('página de inicio no debería tener título vacío', async () => {
        expect(
            await await element(by.id('titulo')).getText()
        ).not.toEqual('');
    });

    it('página de inicio debería tener título "Inicio" ', async () => {
        expect(
            await element(by.id('titulo')).getText()
        ).toEqual('Inicio');
    });

    it('página de inicio debería tener botones de navegación', async () => {
        expect(
            await element.all(by.tagName('app-boton-navegacion')).count()
        ).not.toEqual(0);
    });

    it ('página inicio debería tener un botón por cada dato de navegación (3)', async () => {
        expect(
            await element.all(by.tagName('app-boton-navegacion')).count()).toEqual(3);
    });
});
