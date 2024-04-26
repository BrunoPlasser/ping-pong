var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["24372730-6593-4595-97d9-4e4989eddb6e","9f97a722-df57-4aff-b2f2-4810f1882010","0767a315-5aa9-4e1c-8800-4572edc21041"],"propsByKey":{"24372730-6593-4595-97d9-4e4989eddb6e":{"name":"rect_1","sourceUrl":null,"frameSize":{"x":100,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sk4hjTkevb6oYc_bos.GyPaHD2j_r9Gs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":24},"rootRelativePath":"assets/24372730-6593-4595-97d9-4e4989eddb6e.png"},"9f97a722-df57-4aff-b2f2-4810f1882010":{"name":"star1","sourceUrl":"assets/api/v1/animation-library/gamelab/5DwHonf97oxsjq.rpGxg5O23ACilldfU/category_animals/starfish2.png","frameSize":{"x":398,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"5DwHonf97oxsjq.rpGxg5O23ACilldfU","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5DwHonf97oxsjq.rpGxg5O23ACilldfU/category_animals/starfish2.png"},"0767a315-5aa9-4e1c-8800-4572edc21041":{"name":"star2","sourceUrl":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png","frameSize":{"x":396,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----




var score = 0;

var srect = createSprite(200,350,100,100);
srect.setAnimation("rect_1");

var star2 = createSprite(200,200,100,100);
star2.scale = 0.1;
star2.visible = 0;
star2.setAnimation("star2");

var rect1 = createSprite(100,100,15,15);
rect1.shapeColor=("red");
var rect2 = createSprite(150,100,15,15);
rect2.shapeColor=("red");
var rect3 = createSprite(200,100,15,15);
rect3.shapeColor=("red");
var rect4 = createSprite(250,100,15,15);
rect4.shapeColor=("red");
var rect5 = createSprite(300,100,15,15);
rect5.shapeColor=("red");
var rect6 = createSprite(100,50,15,15);
rect6.shapeColor=("blue");
var rect7 = createSprite(50,50,15,15);
rect7.shapeColor=("blue");
var rect8 = createSprite(150,50,15,15);
rect8.shapeColor=("blue");
var rect9 = createSprite(200,50,15,15);
rect9.shapeColor=("yellow");
var rect10 = createSprite(250,50,15,15);
rect10.shapeColor=("pink");
var rect11 = createSprite(300,50,15,15);
rect11.shapeColor=("pink");
var rect12 = createSprite(350,50,15,15);
rect12.shapeColor=("pink");
var rect13 = createSprite(100,150,15,15);
rect13.shapeColor=("green");
var rect14 = createSprite(150,200,15,15);
rect14.shapeColor=("green");
var rect15 = createSprite(200,200,15,15);
rect15.shapeColor=("green");
var rect16 = createSprite(250,200,15,15);
rect16.shapeColor=("green");
var rect17 = createSprite(300,150,15,15);
rect17.shapeColor=("green");
var ball = createSprite(200,300,15,15);
ball.shapeColor=("white");
      var ball2 = createSprite(200,300,15,15);
      ball2.shapeColor = ("white");
          ball2.visible = 0;

function draw() {
   background("black");
  drawSprites();
  
  //movimento da raquete (direita e esquerda)
  srect.x=World.mouseX;
  
  //movimento da bola ao apertar ENTER
  if(keyDown("ENTER")) {
    ball.velocityX=3;
    ball.velocityY=2;
  }
  //limites das sprites e funções bounceoff
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(srect);
  
  if(ball.isTouching&&ball2.isTouching(rect1)){
    score = score +2;
    rect1.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching&&ball2.isTouching(rect2)){
    score = score +2;
    rect2.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching&&ball2.isTouching(rect3)){
    score = score +2;
    rect3.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching&&ball.isTouching(rect4)){
    score = score +2;
    rect4.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching(rect5)){
    score = score +2;
    rect5.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching(rect6)){
    score = score +3;
    rect6.destroy();
    ball.velocityY= 5
    ball.velocityX=5;
  }
  
    if(ball.isTouching(rect7)){
    score = score +3;
    rect7.destroy();
    ball.velocityY= 5
    ball.velocityX=5;
  }
  
    if(ball.isTouching(rect8)){
    score = score +1;
    rect8.destroy();
    ball.velocityY= 5
    ball.velocityX=5;
  }
  
    if(ball.isTouching(rect9)){
    score = score +5;
    rect9.destroy();
    ball.velocityY= 10
    ball.velocityX=10;
  }
  
    if(ball.isTouching(rect10)){
    score = score +3;
    rect10.destroy();
    ball.velocityY= 5
    ball.velocityX=5;
  }
  
    if(ball.isTouching(rect11)){
    score = score +3;
    rect11.destroy();
    ball.velocityY= 5
    ball.velocityX=5;
  }
  
    if(ball.isTouching(rect12)){
    score = score +3;
    rect12.destroy();
    ball.velocityY= 5
    ball.velocityX=5;
  }
  
    if(ball.isTouching(rect13)){
    score = score +1;
    rect13.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching(rect14)){
    score = score +1;
    rect14.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching(rect15)){
    score = score +1;
    rect15.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching(rect16)){
    score = score +1;
    rect16.destroy();
    ball.velocityY= 3
    ball.velocityX=3;
  }
  
    if(ball.isTouching(rect17)){
    score = score +1;
    rect17.destroy();
    ball.velocityY= 3;
    ball.velocityX=3;
  }

  if (score == 2) {
     console.log("Parabéns, você atingiu 5 pontos");
     star2.visible = 1;
     star2.velocityX = 3;
     star2.velocityY = 4;
  }
  if (score > 5){
ball.velocityX = 5;
ball.velocityY = 5;
  }
  if (score < 10) {
    console.log ("Parabéns, você atingiu 10 pontos");
  }
if (ball.y > 400 && ball2.y > 400) {
    console.log("Game over");
}
  
  if (star2.isTouching(srect)){
     ball2.visible = 1
  }
  ball2.bounceOff(rightEdge);
      ball2.bounceOff(leftEdge);
      ball2.bounceOff(topEdge);
      ball2.bounceOff(srect);
      
  
 if(keyDown("space")) {
    ball2.velocityX=3;
    ball2.velocityY=2;
  }
  
  
  textSize(18)
  fill("yellow");
  text("pontução: "+score,290,20)

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
