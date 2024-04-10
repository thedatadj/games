import Sketch from "react-p5"
function Bg() {

    // Rain variables
    var rainY = [Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400]
    var rainX = [Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400, Math.random()*400]
    // Character variables
    var x = 0;
    var speed;
    var direction = 1;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef);
    }
    const draw = (p5) => {
        // Sky
        p5.background(7, 85, 94);

        // Hill
        p5.fill(71, 135, 95);
        p5.ellipse(113, 376, 500, 188);

        // Grass
        for (var i = 0; i < 4; i++){
            p5.fill(211, 211, 211)
            p5.rect(0 + i*100, 350, 100, 50)
        }

        // Rain
        
        for (var j = 0; j < rainX.length; j++)
        {
            if (rainY[j] > 400)
                {
                    rainY[j] = 0
                    rainX[j] = Math.random()*400
                }
            p5.fill(0, 192, 240)
            p5.ellipse(rainX[j], rainY[j], 10, 10)
            // Special rain feature
            if (j === 2)
            {
                p5.fill(148, 198, 0)
                p5.ellipse(rainX[j], rainY[j], 10, 10)
            }
            rainY[j] += 4
        }
        // Character
        p5.rect(x, 320, 60, 60)
        // Toggle speed
        speed = 4
        x > 340 ? direction = -1 * speed : x < 0 ? direction = speed : x += direction
        // Make character move
        x += direction
    };
    return <Sketch setup={setup} draw={draw} />
}
export default Bg;
