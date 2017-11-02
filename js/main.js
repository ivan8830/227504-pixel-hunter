import {renderScreen} from "./utils";
import introElement from "./intro";

const data = {
  time: 0,
  life: 3,
  answers: [],
  name: null,
  questions: [{
    type: `game1`, variants: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/D2F0370D6.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    }, {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/D2F0370D6.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    }, {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/D2F0370D6.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    }, {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: `pain`,
    }],
  }, {
    type: `game1`, variants: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }, {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `pain`,
    }],
  }],
};

renderScreen(introElement(data));
