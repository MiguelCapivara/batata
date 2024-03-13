function setup() {
    canvas = createCanvas(300, 301);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 301);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}