// 'use strict';
// JS PROTOTYPE CHAIN AND INHERITANCE
// const exampleArr = [1, 2, 3];

// console.log(Object.getPrototypeOf(exampleArr));
// console.log(Object.hasOwn(exampleArr, 'length'));
// console.log(Object.hasOwn(exampleArr, 'map'));

// Array.prototype.map = 'Not the map method anymore';
// console.log(Array.isArray(exampleArr));

// // exampleArr.map((element) => console.log(element));
// // console.log(Array);

// Object.setPrototypeOf(exampleArr, null);

// console.log(exampleArr);

// SETTING PROTOTYPES FOR OBJECTS
// const mJ = {
//   currentSong: 'Smooth Criminal',
// };

// const ozzy = {
//   currentSong: 'Paranoid',
// };

// const musicPlayer = {
//   playSong() {
//     console.log(`Playing... ${this.currentSong}`);
//   },
// };

// Object.setPrototypeOf(mJ, musicPlayer);
// Object.setPrototypeOf(ozzy, musicPlayer);

// console.log(mJ);
// console.log(ozzy);

// CONSTRUCTOR FUNCTIONS IN JS
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//   };
// }

// const jonas = new Person('Jonas', 30);

// console.log(jonas);

// CLASSES IN JS
// class MusicPlayer {
//   // defines the properties that an INSTANCE should have
//   constructor(currentSong) {
//     this.currentSong = currentSong;
//     this.volume = 50;
//   }

//   changeVolume(newVolume) {
//     this.volume = newVolume;
//     console.log(`Volume set to: ${this.volume}`);
//   }

//   static getSupportedFormats() {
//     return ['mp3', 'wav', 'aac'];
//   }
// }

// const mJ = new MusicPlayer('Smooth Criminal');
// mJ.changeVolume(85);

// const freeBird = new MusicPlayer('Free bird');
// console.log(freeBird);
// freeBird.changeVolume(10);
// freeBird.currentSong = 'Sweet Home Alabama';
// console.log(MusicPlayer.getSupportedFormats());

// console.log(typeof MusicPlayer);

// console.log(typeof Date);
// console.log(Date.now());
// console.log(new Date().now());

// console.log(new Date().getFullYear());
// console.log(Date.getFullYear());

// THE THIS KEYWORD

// console.log(this);

// function sayHi() {
//   console.log(this);
//   function innerFunction() {
//     console.log(this);
//   }
//   innerFunction();
// }

// sayHi();

// const cybeleTheSnake = {
//   name: 'Cybele',
//   patientInfo() {
//     // console.log(this);
//     console.log(`Patient name: ${this.name}`);
//   },
// };

// cybeleTheSnake.patientInfo();

// class MusicPlayer {
//   constructor(currentSong) {
//     this.currentSong = currentSong;
//     this.volume = 50;
//   }

//   changeVolume(newVolume) {
//     // function setMinMax() {
//     //   console.log(this);
//     //   this.volume = Math.min(Math.max(newVolume, 0), 100);
//     //   console.log(`Volume set to: ${this.volume}`);
//     // }

//     const setMinMax = () => {
//       console.log(this);
//       this.volume = Math.min(Math.max(newVolume, 0), 100);
//       console.log(`Volume set to: ${this.volume}`);
//     };

//     setMinMax();

//     // setMinMax.bind(this)();

//     this.volume = newVolume;
//     // console.log(`Volume set to: ${this.volume}`);
//   }

//   static getSupportedFormats() {
//     return ['mp3', 'wav', 'aac'];
//   }
// }

// const freeBird = new MusicPlayer('Free bird');
// freeBird.changeVolume(120);

class MusicPlayer {
  #currentSong;
  #volume;

  constructor(currentSong) {
    this.#currentSong = currentSong;
    this.#volume = 50;
  }

  get volume() {
    return this.#volume;
  }

  set volume(newVolume) {
    // check for type of input
    if (typeof newVolume !== 'number')
      throw new Error('Invalid value for the volume!');

    this.#volume = Math.min(Math.max(newVolume, 0), 100);

    console.log(`Volume set to: ${this.#volume}`);

    // maybe manipulate the DOM's slidebar for the volume display
  }

  changeSong(newSong) {
    this.#currentSong = newSong;
    console.log(`New music now playing: ${this.#currentSong}`);
  }
}

const freeBird = new MusicPlayer('Free bird');
console.log(freeBird.volume);

// freeBird.changeVolume(120);
// freeBird.volume = '10';
console.log(freeBird);

class IPodPlayer extends MusicPlayer {
  #device;
  #deviceVersion;

  constructor(currentSong, deviceVersion) {
    super(currentSong);
    this.#device = 'IPod';
    this.#deviceVersion = deviceVersion;
  }

  changeSong(newSong) {
    console.log(`Cannot play this song`);
  }
}

const prodigy = new IPodPlayer('Omen', 'Touch');

console.log(prodigy);
console.log(prodigy.volume);
prodigy.volume = 120;

prodigy.changeSong('Breathe');
