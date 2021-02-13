//Create variables here
 var dog,happyDog,normalDog;
 var foodS,foodStock;
 var database;
 var position;
function preload()
{
  happyDog=loadImage("images/dogImg1.png");
  normalDog=loadImage("images/dogImg.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,5,5);
  dog.addImage(normalDog);
  dog.scale=0.1;


  database=firebase.database();
  console.log(database);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDog);


}
if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS);
  dog.addImage(normalDog);
      update();
      update();

writeStock();
    }
  
  }
  
  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();


}

function writeStock(x){
	if(x<=0){
	x=0;
	}else{
	x=x-1;
	}
	
	
database.ref('/').set({
Food:x

})

}

function updtae(){    
	database.ref(Food).set({
      name:this.name,
      Food:this.Food
    });}
