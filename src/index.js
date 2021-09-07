//console.log("This is a fucking test")

import './styles/main.scss';

class Car {
  constructor(brand) {
    this.name = brand;
  }
}


const bmw = new Car("BMW");

const parr = document.createElement('p');
parr.textContent = `I have a ${bmw.name}`;

const title = document.createElement('h1');
title.textContent = "Top Gear";

const mainParent = document.getElementById("root");
mainParent.append(title, parr);