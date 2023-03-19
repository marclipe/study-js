class Song {
    constructor(musicStyle, singer, duration) {
        this.musicStyle = musicStyle, 
        this.singer = singer, 
        this.duration = duration
    }

    get kindOfMusic() {
        return this.musicStyle
    }
}

//	Paul McCartney
const song = new Song('Chamber pop', 'Paul McCartney', '2:03')

console.log(song.kindOfMusic) //Chamber pop