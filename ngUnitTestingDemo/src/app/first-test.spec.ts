describe('my first test',() => {
    let sut;

    beforeEach(()=>{
        sut = {};
    })

    it('should be true if true with toBeTruthy',()=>{
        //arrange
        sut.a = false;

        //act
        sut.a = true;

        //assert
        expect(sut.a).toBeTruthy();
    })
    
    it('should be true if true with toEqual',()=>{
        //arrange
        sut.a = false;

        //act
        sut.a = true;

        //assert
        expect(sut.a).toEqual(true);
    })

    it('should be true if true with toBe',()=>{
        //arrange
        sut.a = false;

        //act
        sut.a = true;

        //assert
        expect(sut.a).toBe(true);
    })
})