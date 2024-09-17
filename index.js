// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#container");
    const btn=document.querySelector("#btn");
    
    btn.style.margin="10px";
    btn.style.display = "block";
    function createGrid(num)
    {
        container.innerHTML = "";

    // Set Flexbox properties for the container
    container.style.backgroundColor = "lightblue";
    container.style.display = "flex";
    container.style.flexWrap = "wrap"; // Allows the boxes to wrap to the next line
    container.style.justifyContent = "center"; // Centers the grid horizontally

    // Create 16*16 = 256 div elements with class "box"
    for (let i = 1; i <= num * num; i++) {
      const div = document.createElement("div");
      div.classList.add("box");
      container.appendChild(div);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.style.border = "2px solid black";
      box.style.flexBasis = `calc(100% / ${num})`; // Each box takes 1/num of the container's width
      box.style.height = `${600 / num}px`;  // Fixed height for each box
      box.style.boxSizing = "border-box"; // Ensure borders are included in width/height
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "blue"; // Change to blue on hover
      });

      box.addEventListener('mouseout', () => {
        box.style.backgroundColor = "lightblue"; // Reset color on mouse out
      });
    });

    console.log("Flexbox 16x16 grid created");
    }
    btn.addEventListener('click',()=>
    {
        const num=prompt("Enter number between 1 to 100");
        if(num>100 || num<1)
        {
            alert("Number invalid");
        }
        else
        {
            createGrid(num);
        }
    })
    
});
