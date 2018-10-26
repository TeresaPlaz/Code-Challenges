function declareWinner(fighter1, fighter2, firstAttacker) {
  
  class Fighter {
    constructor(name, health, damagePerAttack) 
      {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
      }
}
    let alive = true;
    while(alive) 
    { 
      if (firstAttacker === fighter1.name) {
        fighter2.health -= fighter1.damagePerAttack; 
        firstAttacker = fighter2.name; }
        else {
        fighter1.health -= fighter2.damagePerAttack; 
        firstAttacker = fighter1.name; }
        
        fighter1.health <= 0 || fighter2.health <= 0 ? alive = false : alive = true;
    }
    
    return fighter1.health <=0 ? fighter2.name : fighter1.name ;
}