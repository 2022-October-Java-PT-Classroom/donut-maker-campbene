import { DonutMaker } from "./donut-maker";
//need to set initial cost of new auto-clicker to 2 to work and multiplier to 2 as well
describe ('DonutMaker object', () => {
    test('Does donutmaker add one donut to count', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        expect(underTest.donutCount).toEqual(1);
    });

    test('does donutmaker add one autoclicker', () => { 
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.addAutoClicker();
        expect(underTest.autoClickerCount).toEqual(1);
    });

    test('does donut maker remove auto clicker cost from donut count', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.addAutoClicker();
        expect(underTest.donutCount).toEqual(0);
    });

    test('does autoclicker cost go up by 10%', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.addAutoClicker();
        expect(underTest.autoCost).toEqual(2.2);
    });

    test('does donut maker not buy autoclicker if there are not enough donuts', () => {
        const underTest = new DonutMaker();
        underTest.addAutoClicker();
        expect(underTest.autoClickerCount).toEqual(0);
    });

    test('does auto clicker event add donuts', () =>{
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.addAutoClicker();
        underTest.autoClickerEvent();
        expect(underTest.donutCount).toEqual(1);
    });

    test('can get multiplier count', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.increaseDonutMultiplier();
        expect(underTest.donutMultiCount).toEqual(1);
    });

    test('does donut count go down after multiplier purchase', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.increaseDonutMultiplier();
        expect(underTest.donutCount).toEqual(0);
    });

    test('donut Multiplier should increase donuts added per click for standard click', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.increaseDonutMultiplier();
        underTest.addDonuts();
        expect(underTest.donutCount).toEqual(1.2);
    });

    test('donut Multiplier should increase donuts added per click for auto click', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.addAutoClicker(); //buys autoclicker
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.increaseDonutMultiplier(); //buys multiplier
        underTest.autoClickerEvent(); //check autoclicker event
        expect(underTest.donutCount).toEqual(1.2);
    });

    test('does multiplier purchase increase the cost of the next multiplier', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.addDonuts();
        underTest.increaseDonutMultiplier();
        expect(underTest.donutMultiCost).toEqual(2.2);
    });

    test('does multiplier not go up if donut count is not high enough for purchase', () => {
        const underTest = new DonutMaker();
        underTest.addDonuts();
        underTest.increaseDonutMultiplier();
        expect(underTest.donutMultiCount).toEqual(0);
    });
    
});
