const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() 
{
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{
    if(backgroundImg)
    {
        background(backgroundImg);
    }
    else
    {
                background("blue");

    }

    fill("black");
    textSize(30);

    if (dawn >= 12 )
    {
        text ("Time : " + dawn % 12 + "PM" , 50, 100)
    }
    else if(dawn == 00)
    {
        text ("Time : 12 AM " , 100, 100)
    }

    else {
        text ("Time : " + dawn % 12 + "AM" , 50, 100)
    }
}



async function getBackgroundImg(){



    var morning = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var midmorning = await morning.json ();
    var earlymorning = midmorning.datetime
    var dawn = earlymorning.slice(11,13);
    console.log(dawn);

    // write code to fetch time from API
if  (dawn > 00 && dawn <= 06)
{
    bg = "sunrise1.png";
}
else if (dawn > 04 && dawn <= 06)
{
    bg = "sunrise2.png";
}
else if (dawn > 06 && dawn <=08)
{
    bg = "sunrise3.png";
}else if (dawn > 08 && dawn <= 10)
{
    bg = "sunrise4png";
}else if (dawn > 11 && dawn <= 12)
{
    bg = "sunrise5.png";
}else if (dawn > 13 && dawn <= 14)
{
    bg = "sunrise6.png";
}else if (dawn > 14 && dawn <= 16)
{
    bg = "sunrise7.png";
}else if (dawn > 16 && dawn <= 18)
{
    bg = "sunrise8.png";
}else if (dawn > 18 && dawn <= 20)
{
    bg = "sunrise9.png";
}else if (dawn > 20 && dawn <= 22)
{
    bg = "sunrise10.png";
}else if (dawn > 22 && dawn <= 01)
{
    bg = "sunrise11.png";
}else if (dawn >01 && dawn <= 03)
{
    bg = "sunrise12.png";
}

backgroundImg = loadImage(bg);
}
