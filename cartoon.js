window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // ground color and background color 
    function background() {
        // Background - sky - baby blue
        ctx.fillStyle = "#a1d5eaff";
        // want the entire canvas this color
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Ground - grasss - flat green
        // just the bottom 
        ctx.fillStyle = "green";
        ctx.fillRect(0, 350, canvas.width, 150);
    }
  
    // background object - sun or moon 
    function backgroundObject() {
        // Sun background object 
       // color should be yellow 
       ctx.fillStyle = "yellow";
       // order for circle is begin path, arc, fill, stroke
       // need to create a path
       ctx.beginPath();
       // circle need to Math.PI * 2 - full circle 
       // x, y, radius, start angle, end angle
       ctx.arc(700, 100, 50, 0, Math.PI * 2);
       ctx.fill();
       ctx.stroke();
   }
   // build house - body with roof
   function house() {
    // House rectangle - body
    ctx.fillStyle = "#d2211eff";
    // makes the rect - x, y, width, height
    ctx.fillRect(300, 220, 200, 150);
    ctx.strokeRect(300, 220, 200, 150);

    // Roof - triangle 
    ctx.fillStyle = "#363028ff";
    ctx.beginPath();
    // top
    ctx.moveTo(400, 115);
    // left side
    ctx.lineTo(300, 220);
    // right side
    ctx.lineTo(500, 220);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
   }
  // features of a house - door, windows
  function houseFunction () {
    // door - rect
    ctx.fillStyle = "#363028ff";
    // makes the rect - x, y, width, height
    ctx.fillRect(375, 290, 50, 80);
    ctx.strokeRect(375, 290, 50, 80);

    // windows want 2
    // color of window
    ctx.fillStyle = "#cfa8a8ab";
    // makes the rect - x, y, width, height
    ctx.fillRect(320, 250, 40, 40);
    ctx.strokeRect(320, 250, 40, 40);
    ctx.fillRect(440, 250, 40, 40);
    ctx.strokeRect(440, 250, 40, 40);
  }
  // door knob - mini circle in the door 
  function doorKnob() {
    // want the doorknob to be yellow
    ctx.fillStyle = "yellow";
    // order for circle is begin path, arc, fill, stroke
    // need to create a path
    ctx.beginPath();
    // circle need to Math.PI * 2 - full circle 

    // x, y, radius, start angle, end angle
    // needs to be within the door range
    // small radius since small door
    // within the dimension 
        // 375 + 50 = 425 x value
        // 290 + 80 = 370 y value
    ctx.arc(415, 325, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  // fence for house - loop
  function fence() {
    ctx.save();
    // want it start by the house 
    // translation with for loop - requested
    ctx.translate(280, 330);
    // loop want more stick for the fence 
    for (let i = 0; i < 10; i++) {
      // color want it brown 
      ctx.fillStyle = "#503511ff";
      ctx.fillRect(0, 0, 15, 60);
      ctx.strokeRect(0, 0, 15, 60);
      // move it 
      ctx.translate(25, 0);
    }
    ctx.restore();

    // continue of fence but horizontal line - want two - like a beam
    ctx.fillStyle = "#503511ff";
     
    ctx.fillRect(280, 335, 240, 10);
    ctx.strokeRect(280, 335, 240, 10);
    ctx.fillRect(280, 375, 240, 10);
    ctx.strokeRect(280, 375, 240, 10);
   }
  // requested text on the canvas
  function textCanvas() {
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("House Cartoon", 200, 50);
  }
  // now need to call on the functions - methods 
  background();
  backgroundObject();
  house(); 
  houseFunction(); 
  doorKnob();
  fence(); 
  textCanvas(); 
}
