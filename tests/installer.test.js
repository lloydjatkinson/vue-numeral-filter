import vueNumeralFilterInstaller from '../src/index.js';

describe('Installer', () => {
    it('should install the filters into passed vue instance', () => {
        const mockFilter = jest.fn();
        const mockVue = {
            filter: mockFilter
        };

        vueNumeralFilterInstaller.install(mockVue);

        expect(mockFilter.mock.calls.length).toBe(7);
    });
});