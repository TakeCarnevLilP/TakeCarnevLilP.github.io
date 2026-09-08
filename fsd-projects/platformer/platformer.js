$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 700, 750, -800, "#6d2c22");
    createPlatform(600, 700, 780, 100, "#C44531");
    createPlatform(1350, 0, 20, 600, "#C44531");
    createPlatform(800, 600, 100, 100, "#C44531");
    createPlatform(500, 730, 100, 100, "#C44531");
    createPlatform(1000, 200, 20, 400, "#C44531");
    createPlatform(1000, 580, 300, 20, "#C44531");
    createPlatform(520, 700, 100, -200, "#2e1e16");
    createPlatform(530, 580, 10, 10, "#C44531");
    createPlatform(600, 300, 20, 200, "#C44531");
    createPlatform(600, 480, 315, 20, "#C44531");
    createPlatform(600, 0, 20, 200, "#C44531");
    createPlatform(1100, 480, 20, 20, "#C44531");
    createPlatform(1280, 300, 20, 20, "#C44531");
    createPlatform(980, 580, 20, 20, "#C44531");
    createPlatform(1020, 400, 50, 10, "rgb(202, 128, 31)");
    createPlatform(1000, 200, 100, 20, "#C44531");
    createPlatform(700, 100, 300, 20, "#C44531");
    createPlatform(700, 0, 20, 20, "#C44531");
    createPlatform(800, 0, 20, 20, "#C44531");
    createPlatform(900, 0, 20, 20, "#C44531");
    createPlatform(600, 300, 100, 20, "#C44531");
    createPlatform(700, 100, 20, 220, "#C44531");
    createPlatform(905, 100, 10, -80, "#626262fb");
    createPlatform(805, 100, 10, -80, "#626262fb");
    createPlatform(705, 100, 10, -80, "#626262fb");
    createPlatform(100, 300, 200, 20, "white", 100, 400, 2, 300, 300, 0)
    createPlatform(100, 300, 200, 20, "white", 100, 400, 4, 100, 100, 0)
    createPlatform(100, 300, 200, 20, "white", 100, 400, 1, 200, 200, 0)
    createPlatform(900, 300, 200, 100, "#C44531", 900, 1400, 0.5, 600, 600, 0)
    createPlatform(300, 200, 20, 300, "#C44531", 700, 700, 0, 200, 460, 0.5)
    createPlatform(900, 300, 200, 10, "#2e1e16", 800, 1000, 0.5, 500, 500, 0)
    createPlatform(700, 200, 300, 20, "#C44531");
    createPlatform(1000, 100, 20, 20, "#C44531");
    createPlatform(1000, 200, 20, -100, "#C44531");
    createPlatform(950, 350, 60, 20, "#C44531");
  
  




    // TODO 3 - Create Collectables
    createCollectable("Hello", 640, 350, 1, 1);
    createCollectable("Hello", 100, 50, 0, 1);
    createCollectable("Hello", 740, 150, 1, 0.5);
    
    




    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 3500, 50, 50, 300, 400, 5)
    createCannon("left", 400, 5050, 100, 100, 300, 400, 2)
  
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
