class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }
  computeTwoDigitNumber(value) {
    console.log(value);
    let stringValue = value.toString();
    if (stringValue.length > 2) {
      return stringValue.slice(0, 2);
    } else if (stringValue.length === 2) {
      return stringValue;
    } else {
      return `0${stringValue}`;
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }
  reset() {
    this.currentTime = 0;
  }
  split() {
    const finalMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const finalSeconds = this.computeTwoDigitNumber(this.getSeconds());
    console.log(finalMinutes, finalSeconds);
    return `${finalMinutes}:${finalSeconds}`;
  }
}
