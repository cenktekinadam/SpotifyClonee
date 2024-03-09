
//! Api'ın bizden isteği keyi options nesnesine atadık ve istek linkine ekledik
const options = {
    headers: {
        'X-RapidAPI-Key': '52c86be818mshba81bd5c4c37384p141ff6jsndaa4036a3529',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
}
export default class API {
    //Kurucu MEthot
    constructor() {
        this.songs = [];
    }
    //?--------------TÜRKİYEDEKİ POÜLER MÜZİKLERİ ALIR--------------
    async getPopular() {
        const res = await fetch('https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr', options);
        //gelen veriyi işler
        const data = await res.json();
        //!  Classta Tanımladıgım Song Değişkenine api verilerini Aktardım
        this.songs = data.tracks
    }
    //Api ile aratılan kelime parametresini sorgular
    async searchMusic(query) {
        // Parametre isteği atar
        const res = await fetch(`https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`, options);

        ///GElEN CEVABI İŞLE 
        const data = await res.json();
        // Gelen Cevabın Formatını Değiştirmeliyiz 
        //! Apiden gelen veride fazladan  Track Objesi mevcut 
        const formatted =data.tracks.hits.map((song)=>{
            return song.track
        })
       this.songs=formatted
    }

}


