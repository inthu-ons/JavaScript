//Parent class
class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name=info.name;
    }
}

//Child class
class Song extends Media {
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong= new Song({
    artist : "Queen",
    name : "Bohiemian Rhapsody",
    publishDate : 1975,
    //Price : "35 USD",
});

console.log(mySong);