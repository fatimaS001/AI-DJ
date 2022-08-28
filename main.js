song=""
rightWristX=0
rightWristY=0
leftWristX=0
leftWristY=0




  
function preload(){
    song=loadSound("music.mp3")

}
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video,0,0,600,500)
    fill("#bf4a3f")
    stroke("#bf4a3f")
    circle(leftWristX,leftWristY,20)
    InNumberleftWristY=Number(leftWristY)
    remove_decimals=floor(InNumberleftWristY)
    volume=remove_decimals/500
    document.getElementById("volume").innerHtml="Volume = "+volume

    song.setVolume(volume)

}

function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function modelLoaded(){
console.log('PoseNet Is Intialized')

}

function gotPoses(results){
if(results.length>0){
    console.log(results)

    scoreLeftWrist=results[0].pose.keypoints[9].score
    console.log("scoreLeftWrist = "+scoreLeftWrist)
  leftWristX=results[0].pose.leftWrist.x 
  leftWristY=results[0].pose.leftWrist.y   
  rightWristX=results[0].pose.rightWrist.x 
  rightWristY=results[0].pose.rightWrist.y
}
}


