import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', ()=>{
    let componet:HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(()=>{
        HEROES = [
            {id:1,name: 'SpiderDude', strength: 8},
            {id:2,name: 'Wonderful Woman', strength: 24},
            {id:3,name: 'SuperDude', strength: 55}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])

        componet = new HeroesComponent(mockHeroService);
    })

    describe('delete',()=>{
        it('should remove the indicated hero from the heroes list',()=>{
            mockHeroService.deleteHero.and.returnValue(of(true))
            componet.heroes = HEROES;

            componet.delete(HEROES[2]);

            expect(componet.heroes.length).toBe(2);
        })

        it('should call deleteHero with the correct hero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            componet.heroes = HEROES;

            componet.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })
})