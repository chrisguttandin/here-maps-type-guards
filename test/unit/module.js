import { isHereMaps, isHereMapsWithClusteringNamespace, isHereMapsWithDataNamespace, isHereMapsWithServiceNamespace, isHereMapsWithUiNamespace } from '../../src/module';

describe('isHereMaps()', () => {

    it('should be a function', () => {
        expect(isHereMaps).to.be.a('function');
    });

});

describe('isHereMapsWithClusteringNamespace()', () => {

    it('should be a function', () => {
        expect(isHereMapsWithClusteringNamespace).to.be.a('function');
    });

});

describe('isHereMapsWithDataNamespace()', () => {

    it('should be a function', () => {
        expect(isHereMapsWithDataNamespace).to.be.a('function');
    });

});

describe('isHereMapsWithServiceNamespace()', () => {

    it('should be a function', () => {
        expect(isHereMapsWithServiceNamespace).to.be.a('function');
    });

});

describe('isHereMapsWithUiNamespace()', () => {

    it('should be a function', () => {
        expect(isHereMapsWithUiNamespace).to.be.a('function');
    });

});
