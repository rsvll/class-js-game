class Fighter {
  constructor(name, weapon, seconderyWeapon, superPower, armor, specialMove, powerLevel){
    this.name = name;
    this.arm = 2;
    this.leg = 2;
    this.weapon = weapon;
    this.seconderyWeapon = seconderyWeapon;
    this.superPower = superPower;
    this.armor = armor;
    this.specialMove = specialMove;
    this.powerLevel = powerLevel;
  }
  slogan1(){
    console.log('I wish you would!');
  }
  slogan2(){
    console.log('You gona learn today!!');
  }
  slogan3(){
    console.log('Ama have you screaming Pinaples!');
  }
}

function deathMatch(fighter1, fighter2) {
   fighter1.slogan1();
   fighter2.slogan3();

   if (fighter1.powerLevel > fighter2.powerLevel){
   console.log(fighter1.name + 'Wins!');
 } else if (fighter1.powerLevel < fighter2.powerLevel){
   console.log(fighter2.name + 'Wins!');
 } else {
   console.log(fighter1.name + ' and ' + fighter2.name + ' have knocked each other out, its a Tie ! !');
 }
}

var superMan = new Fighter('Super Man','fist', 'superStrenght', 'abs', 'Heat Vision', 3000);
var goku = new Fighter('Goku','fist','ss1,ss2,ss3,ss4','none','kamehameha', 9000);

deathMatch(superMan, goku);
