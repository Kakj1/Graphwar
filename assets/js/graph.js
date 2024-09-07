class Graph {
    constructor(func) {
        this.func = func.replace('^', '**').replace(/ln/g, 'Math.log');
        this.history = []
    }

    plot() {
        noFill();
        stroke(0, 0, 0);
    
        beginShape();
        for (let x = -width / 2; x < width / 2; x++) {
            let xCoord = x + width / 2;
            let y;
            try {
                y = eval(func.replace(/x/g, `(${x})`));
                vertex(xCoord, height / 2 - y);
            } catch (e) {
                console.error("Invalid function input", e);
                break;
            }
        }
        endShape();
    }
}