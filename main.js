
canvas = new fabric.Canvas("myCanvas");
ball_x=10;
ball_y=10;
hole_x=800;
hole_y=400;
ball_obj="";
hole_obj="";
block_image_width = 5;
block_image_height = 5;

if ((ball_x==hole_x)&&(ball_y==hole_y)) {
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="You have won Golf";
	document.getElementById("myCanvas").style.borderColor="red";

}

function load_img(){
	fabric.Image.fromUrl("ball.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:ball_y,
			left:ball_x
		});
}

function new_image()
{
	fabric.Image.fromUrl("ball.png", function(Img){
    ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
    ball_obj.set({
		top:ball_y,
		left:ball_x
	});
	
 if ((ball_x==hole_x)&&(ball_y==hole_y)) {

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		ball_y = ball_y-block_image_height;
        console.log("block_image_height = "+block_image_heighth);
        console.log("Ball_x"+ball_x+"Ball_y"+ball_y);
        canvas.remove(ball_obj);
        new_image();
		}

	function down()
	{
		ball_y = ball_y+block_image_height;
        console.log("block_image_height = "+block_image_heighth);
        console.log("Ball_x"+ball_x+"Ball_y"+ball_y);
        canvas.remove(ball_obj);
        new_image();	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x-block_image_width;
			console.log("block_image_width = "+block_image_width);
			console.log("Ball_x"+ball_x+"Ball_y"+ball_y);
			canvas.remove(ball_obj);
			new_image();		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x+block_image_width;
            console.log("block_image_width = "+block_image_width);
            console.log("Ball_x"+ball_x+"Ball_y"+ball_y);
            canvas.remove(ball_obj);
            new_image();
		}}}