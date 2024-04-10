import Sketch from "react-p5"
function Rain() {

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
            // Make the rain fall again once it hits the floor
            if (rainY[j] > 400)
            {
                rainY[j] = 0
                rainX[j] = Math.random()*400
            }
            // Make the rain stop by the umbrella
            else if (rainY[j] > p5.mouseY - 30 && rainX[j] > p5.mouseX - 50 && rainX[j] < p5.mouseX + 50)
            {
                rainY[j] = 0
                rainX[j] = Math.random()*400
            }
            p5.fill(0, 192, 240)
            p5.ellipse(rainX[j], rainY[j], 10, 10)
            // Special drop - feature
            // if (j === 2)
            // {
            //     p5.fill(148, 198, 0)
            //     p5.ellipse(rainX[j], rainY[j], 10, 10)
            // }
            // Make the rain fall
            rainY[j] += 4
        }

        // Character - logic
        if (x > p5.mouseX - 50 && x < p5.mouseX + 50)
        {
            // Happy character
            p5.rect(x, 320, 60, 60) // Body
            p5.fill(0, 0, 0) // eyes color
            p5.circle(x + 20, 335, 10) // Left eye
            p5.circle(x + 50, 335, 10) // Right eye
            p5.noFill()
            p5.bezier(x + 50, 355, x + 40, 365, x + 30, 365, x + 20, 355); // Mouth
        }
        else
        {
            // Sad character
            p5.rect(x, 320, 60, 60) // Body
            p5.fill(0, 0, 0) // eyes color
            p5.circle(x + 20, 335, 10) // Left eye
            p5.circle(x + 50, 335, 10) // Right eye
            p5.noFill()
            p5.bezier(x + 50, 355 + 10, x + 40, 365 - 20, x + 30, 365 - 20, x + 20, 355 + 10); // Mouth
        }
        

        // umbrella
        p5.fill(172,88,94)
        p5.triangle(p5.mouseX, p5.mouseY - 70, p5.mouseX - 50, p5.mouseY - 35, p5.mouseX + 50 , p5.mouseY - 35)
        // umbrella - stick
        p5.noFill()
        p5.bezier(p5.mouseX + 20, p5.mouseY + 30, p5.mouseX, p5.mouseY + 40,p5.mouseX, p5.mouseY, p5.mouseX, p5.mouseY - 35)
        
        // Toggle speed
        speed = 3
        x > 340 ? direction = -1 * speed : x < 0 ? direction = speed : x += direction
        // Make character move
        x += direction
    };
    return <Sketch setup={setup} draw={draw} />
}
export default Rain;
