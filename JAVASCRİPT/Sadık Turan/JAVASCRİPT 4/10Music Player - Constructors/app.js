const player = new musicPlayer(musicList);

let music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());

player.previous();
music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());