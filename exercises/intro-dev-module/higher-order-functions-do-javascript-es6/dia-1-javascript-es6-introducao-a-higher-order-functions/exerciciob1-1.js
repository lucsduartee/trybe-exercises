const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Função que recebe um parâmetro (dragão qualquer) 
const dragonAttack = (dragon) => {
  const minDmg = 15;
  //Desestruturação do objeto dragão, dessa forma eu recebo o objeto e passo para minha variavel
  // strength apenas o valor da key strength do meu objeto dragão
  const { strength } = dragon;
  console.log(strength);
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
  return dragonDmg;
};

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
}