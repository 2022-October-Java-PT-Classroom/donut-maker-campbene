class DonutMaker {
  constructor() {
    this.numDonut = 0;
    this.numAutoClicker = 0;
    this.autoCost = 100;
    this.donutMultiCount = 0;
    this.donutMultiCost = 10;
    this.multiplierValue = 0;
  }

  addDonuts() {
    this.numDonut += Math.pow(1.2, this.donutMultiCount);
  }
  get donutCount() {
    return this.numDonut.toFixed(0);
  }
  AutoClickerCost() {
    this.autoCost *= 1.1;
    this.autoCost.toFixed(0);
  }
  addAutoClicker() {
    if (this.numDonut >= this.autoCost) {
      this.numDonut -= Math.floor(this.autoCost);
      this.numAutoClicker++;
      this.AutoClickerCost();
    } else {
      console.log("not enough donuts to purchase");
    }
  }
  get autoClickerCount() {
    return this.numAutoClicker;
  }
  autoClickerEvent() {
    this.numDonut += this.numAutoClicker*(Math.pow(1.2,this.donutMultiCount));
  }
  get donutMultiplier() {
    return this.donutMultiCount;
  }
  increaseDonutMultiplier() {
    if (this.numDonut >= this.donutMultiCost) {
      this.numDonut -= Math.floor(this.donutMultiCost);
      this.donutMultiCount++;
      this.increaseDonutMultiCost();
    } else {
      console.log("not enough donuts to purchase");
    }
  }
  increaseDonutMultiCost() {
    this.donutMultiCost *= 1.1;
  }
  get multiplier(){
    this.multiplierValue = Math.pow(1.2,this.donutMultiCount);
    return this.multiplierValue;
  }

  resetGame() {
    this.numDonut = 0;
    this.numAutoClicker = 0;
    this.autoCost = 100;
    this.donutMultiCount = 0;
    this.donutMultiCost = 10;
  }
}

export { DonutMaker };
