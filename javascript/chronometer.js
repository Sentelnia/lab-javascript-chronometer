class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback()
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(num) {
    num = `${num}`;
    if (num.length <=1) {
      return `0${num}`
    }
    return `${num}`
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let secondes = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${secondes}`
  }
}


