'use strict';

function Sandwich(bread, crust, meat, condiments, veggies, cheese) {
  this.breadType = bread;
  this.crust = crust;
  this.meat = meat;
  this.condiments = condiments;
  this.veggies = veggies;
  this.cheese = cheese;
}

function Dog(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age
}

function Cat(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age
}

function Ferret(name, age, foodRequirements){
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements
}

function Bird(name, breed){
  this.name = name;
  this.breed = breed
}

function Fish(name, species, waterConditions){
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions
}