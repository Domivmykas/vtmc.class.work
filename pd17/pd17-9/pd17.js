function spausdintiVisusElementusSuKlase(klasė) {
    const elementai = document.querySelectorAll('.' + klasė);
    elementai.forEach(elementas => {
      console.log(elementas);
    });
  }
  spausdintiVisusElementusSuKlase('klasės_pavadinimas');