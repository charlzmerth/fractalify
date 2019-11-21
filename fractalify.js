/*
Charles Merth
4/23/2018
CSE 154 AJ

JavaScript that implements functionality for Fractalify.com
*/

"use strict";
(function() {

  function $(id) {
    return document.getElementById(id);
  }

  /**
  * Adds event handlers
  */
  window.onload = function() {

    $("main-triangle").onclick = generateFractal;
    $("reset").onclick = clearScreen;
    $("top").onclick = function() {
      window.scrollTo(0, 0);
    };

  };

  /**
  * Generates a recursive row of triangles
  */
  function generateFractal(e) {
    let newHeight = this.height * 0.5 + "px";
    let newWidth = this.width * 0.5 + "px";
    let newContainer = document.createElement("div");
    newContainer.classList.add("fractal-container");
    $("fractal-window").appendChild(newContainer);

    let fractalIndex = (800 / parseInt(this.height)) * 3;

    for (let i = 0; i < fractalIndex; i++) {
      let newTriangle = document.createElement("img");
      newTriangle.src = "black_triangle.png";
      newTriangle.onclick = generateFractal;
      newTriangle.style.width = newWidth;
      newTriangle.style.height = newHeight;
      newContainer.appendChild(newTriangle);
    }
    window.scrollTo(0, document.body.scrollHeight);
  }

  /**
  * Deletes all triangles execpt for the original one
  */
  function clearScreen() {
    let fractalWindow = $("fractal-window");
    let triangles = fractalWindow.querySelectorAll("div");

    for (let i = 0; i < triangles.length; i++) {
      fractalWindow.removeChild(triangles[i]);
    }

  }

})();
