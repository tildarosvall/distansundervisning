  function myFunction() {   //anropar min funktion
    var dots = document.getElementById("dots"); //skapar en variabel för alla "dots" i koden
    var moreText = document.getElementById("more"); //skapar en variabel för alla "more" i koden
    var btnText = document.getElementById("myBtn"); //skapar en variabel för alla "myBtn" i koden
  
    if (dots.style.display === "none") { //Detta är ett påstående. Om det är "sant", så kommer nedanstående kod fram till "else" att köras. Koden kommer att gömma elementet, eftersom det står = "none". Det är det vi uppfattar som försvinner när man klickar på knappen och den ändras till en annan knapp.
      dots.style.display = "inline"; //koden ställer in visningstypen för detta element. Eftersom det står = "inline", så kommer elementet är synas på hemsidan.
      btnText.innerHTML = "Läs mer"; //detta innefattar html texten på knappen. Det är vad som ska stå på min knapp innan man klickar på den.
      moreText.style.display = "none"; //koden innebär hur min text kommer visa sig "style.display". Eftersom den står = "none", så kommer detta element att inte visas.
    } else { //annars om påståendet ovan inte stämmer, så kommer nedanstående kod köras istället.
      dots.style.display = "none"; //hur mina "dots" kommer att visa sig på min hemsida. Eftersom den står = "none", så kommer detta element att inte visas.
      btnText.innerHTML = "Läs mindre"; //detta innefattar html texten på knappen. Tillskillnad från den andra html koden här ovan, så handlar detta om vad som ska stå på min knapp EFTER man klickat på den.
      moreText.style.display = "inline"; //koden ställer in visningstypen för detta element. Eftersom det står = "inline", så kommer elementet är synas på hemsidan.
    }
  }

