  const text = "ผลงาน / เกียรติบัตร";
    const speed = 80; // ความเร็วในการพิมพ์ (ms)
    let i = 0;
    let isDeleting = false;

    function typeEffect() {
      const element = document.getElementById("typewriters");

      if (!isDeleting) {
        element.textContent = text.slice(0, i++);
        if (i > text.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1000); // รอ 1 วิ ก่อนเริ่มลบ
          return;
        }
      } else {
        element.textContent = text.slice(0, i--);
        if (i < 0) {
          isDeleting = false;
          setTimeout(typeEffect, 500); // รอ 0.5 วิ ก่อนเริ่มพิมพ์ใหม่
          return;
        }
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();