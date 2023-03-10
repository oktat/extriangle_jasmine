
describe('Az app.js tesztjei', () => {
    it('Bemenet 30, 35, akkor 525', () => {
        let actual = calcTriangleArea(30, 35);
        expect(525).toBe(actual);
    });    
    it('Bemenet 100, 130, akkor 6500', () => {
        let actual = calcTriangleArea(100, 130);
        expect(6500).toBe(actual);
    });
    it('Bemenet 1, 3, akkor 1,5', () => {
        let actual = calcTriangleArea(1, 3);
        expect(1.5).toBe(actual);
    });
});

describe('A bevitel ellenőrzésének tesztelése', () => {
    it('Az "a" bemenetre false-t várunk', () => {
        let actual = checkInput('a');
        expect(actual).toBeFalse();
    });
    it('Az "cica" bemenetre false-t várunk', () => {
        let actual = checkInput('cica');
        expect(actual).toBeFalse();
    });    
    it('Az 33 bemenetre nem null-t várunk', () => {
        let actual = checkInput('33');
        expect(actual).not.toBeNull();
    });
    it('Hibát dob ha kisebb 1-nél az éréték?', () => {        
        expect(() => {
            checkInput('-3')
        }).toThrow();
    });
    it('Megadott hibát dob 1-nél kisebb érték esetén?', () => {        
        expect(() => {
            checkInput('-3')
        }).toThrow(new Error('Hiba! 1-nél kisebb érték!'));
    });

});

