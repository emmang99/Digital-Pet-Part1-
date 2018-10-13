function Tamagotchi(tamaName) {
    //
    this.petName;
    this.initialFood = 60;
    this.metabolismRate = 1000;

    /*
        add an array of objects
        -20 items
        -each element of the array has the following
            -mood(angry, happy, sad, joke)
            -mood percentage
            -saying(a saying relating the the mood)
    */
    this.mood = [
      {moodName:"love", moodPercentage:100, saying:"I'm on cloud nine right now! Well, more like cloud twelve!!"},
      {moodName:"happy", moodPercentage:95, saying:"I'm gonna backflip because I'm so happy!"},
      {moodName:"positive", moodPercentage:90, saying:"Today is a good day! I'm feeling great!"},
      {moodName:"excited", moodPercentage:85, saying:"I can't wait for all the good things! So excited!"},
      {moodName:"joke", moodPercentage:80, saying:"Wanna hear a joke about a piece of paper? Nevermind, it's TEAR-ABLE!"},
      {moodName:"ironic", moodPercentage:75, saying:"When people call me crazy, I almost fall off my unicorn."},
      {moodName:"mischievous", moodPercentage:70, saying:"I solemnly swear that I'm up to no good. He he!"},
      {moodName:"relaxed", moodPercentage:65, saying:"Nothing can make me worry, I'm very relaxed now."},
      {moodName:"okay", moodPercentage:60, saying:"Meh, I'm feeling okay I guess."},
      {moodName:"confused", moodPercentage:55, saying:"I'm confused...oh wait...maybe I'm not. Hmm."},
      {moodName:"scared", moodPercentage:50, saying:"I think there is a monster in my closet. I'm freaking out!"},
      {moodName:"nervous", moodPercentage:45, saying:"I'm shaking like crazy here! So nervous that I wish I can sink into the ground."},
      {moodName:"emotional", moodPercentage:40, saying:"I just finished watching Toy Story 3 and now I'm crying for the fifth time!"},
      {moodName:"tired", moodPercentage:35, saying:"I'm so tired. Even saying this makes me tired."},
      {moodName:"bored", moodPercentage:30, saying:"I'm so bored that I'm counting floor tiles right now."},
      {moodName:"stressed", moodPercentage:25, saying:"Another day in Stressed Out Town. Population: me."},
      {moodName:"angry", moodPercentage:20, saying:"That's it! I'm flipping this table!"},
      {moodName:"irritated", moodPercentage:15, saying:"Urgh, leave me alone!"},
      {moodName:"sad", moodPercentage:10, saying:"I'm so sad now. Even cute puppies cannot cheer me up."},
      {moodName:"sick", moodPercentage:5, saying:"I'm so sick right now. I don't have the energy."},
      {moodName:"depressed", moodPercentage:0, saying:"Do I matter? My life feels like a test I didn't study for."},
    ];
    /*
        an array of compliments
        -10 items
    */

    this.compliments = [
      "you're way more awesome than a successful water bottle flip!",
      "you're the best of the best!",
      "I would gladly share my food with you because I like you lots!",
      "you are the coolest cucumber I have ever seen.",
      "I bet you would still look good in socks and sandals!",
      "even when you're old, kids will still think you're cool.",
      "you make an excellent human.",
      "you're not completely useless at all. Great.",
      "you're so nice that I want to throw a rainbow at you!",
      "you're a smart cookie, a wise blueberry muffin and a brilliant pancake."
    ];
    /*
        add an array of favourite foods(at least 10)
        each element of the array should have
        -food name
        -food value
        -chance of food poisoning
    */
    this.foods = [
      {foodName:"Broccoli", foodValue:60, chanceOfPoison:0},
      {foodName:"Oatmeal", foodValue:50, chanceOfPoison:0.1},
      {foodName:"Salad", foodValue:40, chanceOfPoison:0.2},
      {foodName:"Spaghetti", foodValue:30, chanceOfPoison:0.3},
      {foodName:"Chocolate", foodValue:20, chanceOfPoison:0.4},
      {foodName:"Pancake", foodValue:10, chanceOfPoison:0.5},
      {foodName:"Donut", foodValue:20, chanceOfPoison:0.6},
      {foodName:"Cheetos", foodValue:30, chanceOfPoison:0.7},
      {foodName:"Red Mushroom", foodValue:40, chanceOfPoison:0.8},
      {foodName:"Yellow Snow", foodValue:50, chanceOfPoison:0.9},
      {foodName:"Chicken Nugget", foodValue:60, chanceOfPoison:1},
    ];

    this.init = () => {
        this.petName = tamaName;
        console.log(`Hi!  I'm ${this.petName}`);
        this.hatch();
    }
    this.init();
}
Tamagotchi.prototype.resetFood = function(){
    this.food=this.initialFood;
}

Tamagotchi.prototype.hatch = function(){
    this.resetFood();
    this.startMetabolism();
}
Tamagotchi.prototype.die = function(){
    clearInterval(this.metabolism);
    console.log("I am dead!");
}
Tamagotchi.prototype.startMetabolism = function(){
    this.metabolism = setInterval(()=> {
        this.food -=1;
        console.log(`${this.food} until I starve`);
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}

Tamagotchi.prototype.eatLasagna = function() {
    console.log(`can I see the food? ${this.food}`);
    this.food +=20;
}

//to add

//a drink coffee command that speeds up the metabolism of your pet
Tamagotchi.prototype.drinkCoffee = function() {
    console.log("I feel so ALIVE! WOAAH!");
    clearInterval(this.metabolism);
    this.metabolism = setInterval(()=> {
        this.food -=5;
        console.log(`${this.food} until I starve`);
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}
//a drink beer command that slows down the metabolism of your pet
Tamagotchi.prototype.drinkBeer = function() {
    console.log("I'm not drunk! But why are there four of you?");
    clearInterval(this.metabolism);
    this.metabolism = setInterval(()=> {
        this.food -=0.5;
        console.log(`${this.food} until I starve`);
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}
/*
an eat food command that will select a random food that will
-check if the pet gets food poisoning
-add points to the pets food count if they don't get food poisoning
-remove points from the pets food count if they do get food poisoning
*/

Tamagotchi.prototype.eatFood = function() {
    console.log("I'm hungry!");
    let foodEat = this.foods[Math.floor(Math.random() * this.foods.length)];
    console.log(`You give me ${foodEat.foodName}`);
    if (foodEat.chanceOfPoison >= 0.6){
      console.log(`I get food poisoned! Minus ${foodEat.foodValue}`);
      this.food -= foodEat.foodValue;
    }
    else {
      console.log(`Yum! So delicious! Plus ${foodEat.foodValue}`);
      this.food += foodEat.foodValue;
    }
}
// a command that takes in a mood and returns a phrase
Tamagotchi.prototype.whatMood = function(moodWhat) {
    this.moodWhat = moodWhat;
    let theMood = this.mood.find( mood => mood.moodName == moodWhat);
    console.log(`My mood percentage: ${theMood.moodPercentage}; ${theMood.saying}`);
}
/*
    a command that takes in your name and returns you a compliment structured using template
*/
Tamagotchi.prototype.whatCompliment = function() {
    let sayComp = this.compliments[Math.floor(Math.random() * this.compliments.length)];
    const player = (playerName) => {
      console.log(`${playerName}, ${sayComp}`);
    }
    player("Name");
}
