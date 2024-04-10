import Sketch from "react-p5"
import grass from './grass.svg'

function Bg() {
    var bubbles = [];
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef);
        for (let i = 0; i < 50; i++) {
            let x = p5.random(p5.width);
            let y = p5.random(p5.height);
            let r = p5.random(5,30);
            bubbles[i] = new Bubble(p5,x, y, r);    
        }
    }
    const draw = (p5) => {
        // Sky
        p5.background(7, 85, 94);

        // Hill
        p5.fill(71, 135, 95);
        p5.ellipse(113, 376, 500, 188);

        // Grass
        

        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
            bubbles[i].show();
        }
    };
    function Bubble(p5, x, y, r) {
        this.p5 = p5;
        this.x = x;
        this.y = y;
        this.move = function () {
            this.x += p5.random(-0.1, 0.1);
            this.y += p5.random(-0.6, 0.6);
        }
        this.show = function () { 
            // This defines colors of the bubbles   
            this.p5.fill(255, 124, 0)         
            this.p5.ellipse(this.x, this.y, r);
        }
    }
    return <Sketch setup={setup} draw={draw} />
}
export default Bg;
