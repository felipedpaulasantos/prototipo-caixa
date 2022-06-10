export class Clock {
    hours: any;
    minutes: any;
    seconds: any;
    clockTime: any;

    constructor() {
       setInterval(() => this.run(), 1000);
    }

    run() {
        const time = new Date();
        this.hours = time.getHours().toString();
        this.minutes = time.getMinutes().toString();
        this.seconds = time.getSeconds().toString();

        if (this.hours.length < 2) {
            this.hours = "0" + this.hours;
        }

        if (this.minutes.length < 2) {
            this.minutes = "0" + this.minutes;
        }

        if (this.seconds.length < 2) {
            this.seconds = "0" + this.seconds;
        }

        // this.clockTime = this.hours + ":" + this.minutes + ":" + this.seconds;
        this.clockTime = this.hours + ":" + this.minutes;
        return this.clockTime;
    }

}
