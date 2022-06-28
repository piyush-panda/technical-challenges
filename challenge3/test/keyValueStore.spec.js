const getValue = require('../src/keyValueStore.js').getValue;

describe('KeyValueStore.getValue', () => {

    it('should return string value if key is present', () => {
        let value = getValue('a/b/c', {'a': {'b':{'c': 'd'}}});
        expect(value).toBe('d');
    })

    it('should return object if key is present', () => {
        let value = getValue('a', {'a': {'b':{'c': 'd'}}});
        expect(value).toEqual({'b':{'c': 'd'}});
    })

    it('should return empty string if key is not present', () => {
        let value = getValue('a/b/e', {'a': {'b':{'c': 'd'}}});
        expect(value).toBe('');
    })

    it('should return empty string if key is empty', () => {
        let value = getValue('', {'a': {'b':{'c': 'd'}}});
        expect(value).toBe('');
    })

    it('should return empty string if object is null', () => {
        let value = getValue('a', null);
        expect(value).toBe('');
    })

})