let x = 5;
let y = x;
let z = y;

x += 1;

// console.log(x,y,z);


let videoGame = {
    title: "League of Legends",
    studio: "Riot Games",
    price: 0,
    platforms : ["xbox", "pc"]
};

let videoGame2 = videoGame;
let videoGame3 = {...videoGame};

videoGame3.price = 10;
videoGame3.platforms = [...videoGame.platforms];

// console.log(videoGame, videoGame2, videoGame3);


let {title , studio} = videoGame;
// console.log(whatever, studio)

let iceCreamFlavors = ["vanilla bean", "mint chocolate chip", "cookie dough"];

let [vanilla, mintCohcolateChip] = iceCreamFlavors

// console.log(vanilla, "and", mintCohcolateChip);

let [,,CookieDough] = iceCreamFlavors;

// console.log(CookieDough)

//parallel assignment

[iceCreamFlavors[0] , iceCreamFlavors[iceCreamFlavors.length-1]] = [iceCreamFlavors[iceCreamFlavors.length-1] , iceCreamFlavors[0]];
console.log(iceCreamFlavors)


let temp = iceCreamFlavors[0]
iceCreamFlavors[0] = iceCreamFlavors[iceCreamFlavors.length-1]
iceCreamFlavors[iceCreamFlavors.length-1] = temp