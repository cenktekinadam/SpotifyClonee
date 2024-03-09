export default class UI {
    constructor() {
        this.list = document.querySelector('#list')
        this.form = document.querySelector('#search-form')
        this.title = document.querySelector('#title')
        this.playArea = document.querySelector('.play-area')
        this.chekbox=document.querySelector('#mode-checkbox')
    }




    //Lİste ALanına Yükleniyor YAZar
    renderLoader() {
        this.list.innerHTML = `
        <div class="center-body">
            <div class="loader-circle-9">
             Loading
             <span></span>
            </div>
        </div>
`;
    }

    renderCards(songs) {
        //Önce Loading Ekrandan Kaldırılır 
        this.list.innerHTML = "";
        //---------------*------------

        songs.forEach((song) => {
            //*1  Card Adında Bir div oluşturmak için önce create ettim
            const div = document.createElement('div');
            //*2 dive  CARD Classını verdim
            div.className = 'card';
            //*3 Clas içeriğini Dinamik Bir Şekilde  oluşturdum
            div.innerHTML = `
           <figure>
           <img src="${song.images.coverart}"
            alt="">

          <div id="play">
            <i id="play-btn" class="bi bi-play-fill"></i>
         </div>
             </figure>

          <h4>${song.subtitle}</h4>
             <p>${song.title}</p>
`;
            //*4 Carta İçeriğinin verielerine sonradan erişebilmek için Data verileri ekledim

            div.dataset.title = song.title
            div.dataset.photo = song.images.coverart
            div.dataset.url = song.hub?.actions[1].uri



            //*5 Oluşturdugum Dinamik CArd divini Seçtiğim list divine Child olrak gönderdim
            this.list.appendChild(div)
        });


    }
    // Başlıgı Günceller
    changeTitle(text) {
        this.title.innerText = text;


    }

    //Müzik  Oynatma Ksimini Ekrana Bas
    renderPlayingInfo(song) {
        this.playArea.innerHTML = `
            <div>
            <img class="animate"
                src="${song.photo}" />
            <div>
                <p>Şuan Oynatılıyor...</p>
                <h3>${song.title}</h3>
            </div>
            </div>

        <audio controls autoplay src="${song.url}"></audio>
`
    }
} 
