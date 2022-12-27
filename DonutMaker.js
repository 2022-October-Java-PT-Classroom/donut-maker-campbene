class DonutMaker{
    constructor(){
        numDonut= 0;
        numAutoClicker = 0;
        autoCost = 100;
        autoCostMulti = 1.1;
    }
    
    addDonuts(){
        this.numDonut++;
    }
    get donutCount(){
        return this.numDonut;
    }
    AutoClickerCost(){
        autoCost *= this.autoCostMulti; 
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
        this.numDonut+=this.numAutoClicker;
    }

}