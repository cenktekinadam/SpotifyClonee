import API from "./scripts/api.js";

import UI from './scripts/ui.js';

//!Classın Örneğini oluşturmak LAzım
const api = new API();
const ui = new UI();
//*SAYFANIN YÜKLENME OLAYINI İZLE
document.addEventListener('DOMContentLoaded', async () => {
  //1 - Ekrana Loading Yazısı
  ui.renderLoader();
  // 2- Api istek Fonksiyonu Burada Çalıştı
  await api.getPopular();
  // 3- Gelen Verileri Ekrana Bas
  ui.renderCards(api.songs);

});

//* Formun Gönderilme Olayını İZle
ui.form.addEventListener('submit', async (event) => {
  //! Form GÖnderme olaylarında  SAyfa Yenilenmesinin engellenmesi gerekebilir
  event.preventDefault();
  //*Aratılan Kelimeye Eriş
  const query = event.target[0].value;
  // input Boşssa Uyar Gönder
  if (!query.trim()) return alert("Boş Değer Girdiniz");

  //Ekrana Yükleniyor renderla
  ui.renderLoader();
  //Başlığı Değiştir
  ui.changeTitle(query + "  İçin Sonuçlar");
  //APidan Şarkıları al


  //Alınanları renderla Ve Başlık Değğiştir
  await api.searchMusic(query);
  ui.renderCards(api.songs);
});
//Kartların Play butonunu aktif etmem gerekir 
//KArta ulaşmak için ise  daha önce aldıgımız list elementi
ui.list.addEventListener("click", (e) => {
  //Tıklannılan Karttaki Şarkının bilgilerimi aldım
  if (e.target.id === 'play-btn') {
    const song = e.target.closest(".card").dataset;
    // Şarkıyı Oynatma Kısmında ekrana Bastım
    ui.renderPlayingInfo(song);
  }
})


//Lokalden Mode verisini al
const mode  =localStorage.getItem('mode');
document.body.className=mode ==='true'?'dark':'light';

//Moda Göre Chekbox Düzeltme
ui.chekbox.checked=mode ==='true'

//*Chekbox Değerini izke
ui.chekbox.addEventListener('change', (e) => {
  const isDarkMode = e.target.checked;
  //False Lİght mode --True Dark Mode
  document.body.className = isDarkMode ? 'dark' : 'light'


  //Locale Mode ekle
  
localStorage.setItem('mode',isDarkMode)

})
