    // DOM elementlar
    const ball = document.getElementById("ball");
    const container = document.getElementById("container");

    // Ball koordinatalari va tezligi
    let x = 100;
    let y = 100;
    let dx = 5; // X o'qi bo'ylab tezlik
    let dy = 5; // Y o'qi bo'ylab tezlik

    // Ekran o'lchamlarini olish
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Harakat funksiyasi
    function moveBall() {
      // Chegaraga yetganda yo'nalishni o'zgartirish
      if (x + dx > containerWidth - 50 || x + dx < 0) {
        dx = -dx; // X yo'nalishini o'zgartirish
      }
      if (y + dy > containerHeight - 50 || y + dy < 0) {
        dy = -dy; // Y yo'nalishini o'zgartirish
      }

      // Koptokning yangi koordinatalari
      x += dx;
      y += dy;

      // DOM da koptok pozitsiyasini o'zgartirish
      ball.style.left = x + "px";
      ball.style.top = y + "px";

      // Animatsiyani davom ettirish
      requestAnimationFrame(moveBall);
    }

    // Enter tugmasini bosganda boshlash
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        moveBall(); // Harakatni boshlash
      }
    });
