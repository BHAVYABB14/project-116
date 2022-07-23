moustachx ="" ;
moustachy = "";
function preload(){
moustach_me = loadimage('https://pngimg.com/image/55059');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('poseNet is initialized');   
}
function gotposes(results){
if(results.length > 0 )
{
    console.log(results);
    moustachx = results[0].pose.nose.x -15;
    moustachy = results[0].pose.nose.y -20;
    console.log("noseX = "+nosex);
    console.log("noseY = "+nosey);
}
}
function draw(){
    image(video,0,0,300,300);
    image(moustach_me,moustachx,moustachy,30,30);  
}

function take_snapshot(){
    save('me.png');
}