noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML="Width And Height of the text will be ="+difference+"px";

    textSize(difference);
    fill('#F90093');
    stroke('#F900093');
    text('Chaitanya',noseX,noseY);
}

