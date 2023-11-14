// https://www.youtube.com/watch?v=B6aJpbX_IZU ile tasarım yapıldı.

let puanText = document.getElementById("puanText");
puan = 0;
puanText.innerHTML = "0";

let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");
    //bir şey seçmediysek
    if (counter === 0) {
      //html'de animal attribute tanımlamıştık,onu firstSelection'a bağladık.
      firstSelection = card.getAttribute("animal");
      counter++;
      //counter 0 değilse
    } else {
      secondSelection = card.getAttribute("animal");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[animal='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");

        //Eşleşen kart bilgisini yazdırmak için
        puan++;
        puanText.innerHTML = puan;

        // ÖDEV 11 ilk sorunun cevabı 
        
        // Tüm kartlar eşleştirildiyse
        if (puan === 4) {
          // Kutlama görselini göster
          const celebration = document.getElementById("celebration");
          celebration.style.display = "block";
          // 5 saniye sonra görseli gizle
          setTimeout(() => {
            celebration.style.display = "none";
          }, 5000);
        }
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }
    }
  });
});
