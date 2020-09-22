const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Nov 7, 2020 09:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText =
      Math.floor(distance / day) > 0 ? Math.floor(distance / day) : 0),
      (document.getElementById("hours").innerText =
        Math.floor((distance % day) / hour) > 0
          ? Math.floor((distance % day) / hour)
          : 0),
      (document.getElementById("minutes").innerText =
        Math.floor((distance % hour) / minute) > 0
          ? Math.floor((distance % hour) / minute)
          : 0),
      (document.getElementById("seconds").innerText =
        Math.floor((distance % minute) / second) > 0
          ? Math.floor((distance % minute) / second)
          : 0);

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S COUNTED DOWN!;
    //}
  }, second);


// Old FAQ
// const items = document.querySelectorAll(".accordion a");

// function toggleAccordion() {
//   this.classList.toggle("active");
//   this.nextElementSibling.classList.toggle("active");
// }

// items.forEach(item => item.addEventListener("click", toggleAccordion));

// New FAQ


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

