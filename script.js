'sue strict'

console.log("Hello, World!");


function Tank (name, type, cannon, armor) {
    this.name = name;
    this.type = type;
    this.cannon = cannon;
    this.armor = armor;

}
  

const T34e = new Tank('T34', 'Medium Tank', '85mm', '55mm')
const Shermane = new Tank("Sherman M4A3", "Medium Tank", "76.2mm", "45mm")

console.log(T34e.name, T34e.armor, T34e.cannon, T34e.type)

function Tank (name, type, cannon, armor) {
    this.name = name;
    this.type = type;
    this.cannon = cannon;
    this.armor = armor;

}
 
Tank.prototype.description = function() {
    return this.name + " is a " + this.type + " with a " + this.cannon + " cannon and " + this.armor + " of armor.";
} 

const BT = new Tank('T34', 'Medium Tank', '85mm', '55mm')
const Sherman = new Tank("Sherman M4A3", "Medium Tank", "76.2mm", "45mm")

document.write(BT.description());