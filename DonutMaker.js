class DonutMaker{
    constructor(){
        numDonut= 0;
        numAutoClicker = 0;
        autoCost = 100;
        donutMultiCount = 0;
        donutMultiCost = 10;
    }
    
    addDonuts(){
        this.numDonut+=Math.pow(1.2,this.donutMultiCount);
    }
    get donutCount(){
        return this.numDonut;
    }
    AutoClickerCost(){
        autoCost *= 1.1; 
    }
    addAutoClicker(){
        if(this.numDonut>=this.autoCost){
            this.numDonut-=Math.floor(autoCost);
            this.numAutoClicker++;
            this.AutoClickerCost();
        } else {
            console.log("not enough donuts to purchase");
        }
    }
    get autoClickerCount(){
        return this.numAutoClicker;
    }
    autoClickerEvent(){
        this.numDonut+=this.numAutoClicker*Math.pow(1.2*this.donutMultiCount);
    }
    get donutMultiplier(){
        return this.donutMultiCount;
    }
    increaseDonutMultiplier(){
        if(this.numDonut>=this.donutMultiCost){
            this.numDonut-=Math.floor(this.donutMultiCost);
            this.donutMultiCount++;
            this.increaseDonutMultiCost();
        } else {
            console.log("not enough donuts to purchase");
        }
    }
    increaseDonutMultiCost(){
        this.donutMultiCost*=1.1;
    }

}