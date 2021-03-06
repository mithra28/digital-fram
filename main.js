function preload()
{
}

function setup()
{
    canvas = createCanvas(640 , 480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video , 10 , 10 , 640 , 480);
    
    fill(1,0,0);
    stroke(255,100,0);
    rect(25,50,50,450);

    fill(0,0,0);
    stroke(255,100,0);
    rect(565,50,50,450);

    fill(0,0,0);
    stroke(255,100,0);
    rect(85,25,500,50);

    fill(0,0,0);
    stroke(255,100,0);
    rect(85,410,500,50);

    fill(255,50,0);
    stroke(255,100,0);
    circle(50,50,125);

    fill(255,100,0);
    stroke(255,100,0);
    circle(50,430,125);

    fill(255,175,0);
    stroke(255,100,0);
    circle(590,430,125);

    fill(255,250,0);
    stroke(255,100,0);
    circle(590,50,125);
}

function take_snapshot()
{
    save("image.png");
}