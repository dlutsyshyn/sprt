class Timer {int;
    constructor(title, delay, stopCount){
        this.title = title,
        this.delay = delay,
        this.stopCount = stopCount,
        this.start()
    }
    start(){
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`)
        this.int = setInterval(()=>this.tick(), this.delay)
        setTimeout(()=>this.stop(), this.delay*this.stopCount)
    }
    tick(){
        this.stopCount--;
        console.log(`Timer ${this.title} Tick | cycles left ${this.stopCount}`)
    }
    stop(){
        console.log(`Timer ${this.title} stopped`)
        clearInterval(this.int)
    }
}

function runTimer (title,delay,stopCount) {
    let run = new Timer(title,delay,stopCount);
}


runTimer("Bleep", 1000, 5);
