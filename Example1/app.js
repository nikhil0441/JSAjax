let btn = document.querySelector("button"); // Ensure correct selection
let xhr = new XMLHttpRequest();

// Define Processing function first
let Processing = () => {
  let span = document.querySelector("#currentDatetime");
  if (!span) {
    console.error("Error: #currentDatetime element not found!");
    return;
  }

  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let obj = JSON.parse(xhr.responseText);
      let today = new Date(obj.datetime);
      let currTime = today.toLocaleString(); // Keep only one formatted output
      span.innerHTML = currTime;
    } else {
      span.innerHTML =
        "Error! Could not get date and time <br>Reason: " +
        (xhr.statusText || "Unknown error");
    }
  }
};

btn.addEventListener("click", () => {
  xhr.onreadystatechange = Processing; // Now Processing is defined
  xhr.open("GET", "https://worldtimeapi.org/api/timezone/Asia/Kolkata", true);
  xhr.send();
});
