class DonutMaker {
  constructor() {
    this.numDonut = 0;
    this.numAutoClicker = 0;
    this.autoCost = 100;
    this.donutMultiCount = 0;
    this.donutMultiCost = 50;
    this.multiplierValue = 0;
    this.newDonutCost = 500;
    this.newDonutCount = 0;
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
    this.numDonut += this.numAutoClicker * Math.pow(1.2, this.donutMultiCount);
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
  get multiplier() {
    this.multiplierValue = Math.pow(1.2, this.donutMultiCount);
    return this.multiplierValue;
  }

  randomEvent() {
    this.numDonut +=
      (10 + Math.floor(Math.random() * 101)) *
      Math.pow(1.2, this.donutMultiCount);
  }

  get getNewDonutCost() {
    return this.newDonutCost;
  }

  increaseNewDonutCost() {
    this.newDonutCost *= 5;
  }

  makeNewDonuts() {
    if (this.numDonut >= this.newDonutCost) {
      this.numDonut -= Math.floor(this.newDonutCost);
      this.newDonutCount++;
      this.increaseNewDonutCost();
    } else {
      console.log("not enough donuts to purchase");
    }
  }

  resetGame() {
    this.numDonut = 0;
    this.numAutoClicker = 0;
    this.autoCost = 100;
    this.donutMultiCount = 0;
    this.donutMultiCost = 50;
    this.newDonutCost = 500;
    this.newDonutCount = 0;
  }
}

export { DonutMaker };
