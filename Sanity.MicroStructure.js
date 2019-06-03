import elfUtils from 'elven-code';

describe('Git Explorer confirm client, server and micros Suite', () => {
    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('checks if client/src/components/App.js exists', () => {
        const fileName = __dirname + '/../client/src/components/App.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if server/app.js exists', () => {
        const fileName = __dirname + '/../server/app.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/qux/source/control.js exists', () => {
        const fileName = __dirname + '/../micros/qux/source/control.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/git-user/source/control.js exists', () => {
        const fileName = __dirname + '/../micros/git-user/source/control.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/git-gist/source/control.js exists', () => {
        const fileName = __dirname + '/../micros/git-gist/source/control.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });
});
