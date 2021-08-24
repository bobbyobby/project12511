nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('Posenet is Ready');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x = "+ nosex + "nose y =" + nosey);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx-rightwristx);
        console.log("leftwristx = "+ leftwristx +"right wrist x="+ rightwristx +"difference ="+ difference);
    }
}
function draw(){
    background('#808080');
    document.getElementById("square_side").innerHTML = "hight and width of the font =" + difference + "px";
    textSize(difference);
    fill('#00FFFF');
    text('rayhaan',50,400);








}