var newBall = function(e)	{
	var rectangle = document.getElementById("rectangle");
	//var parentOffset = rectangle.offset();
	var relX = e.pageX - 50;
	var relY = e.pageY - 50;
	var ball = document.createElement("div");
	ball.className = "ball";
	var a = "absolute";
	ball.style.position = a;
	ball.style.left = relX + "px";
	ball.style.top = relY + "px";
	ball.style.border = "1px solid";
	ball.style.borderRadius = "100px";
	ball.style.width = "100px";
	ball.style.height = "100px";
	ball.style.backgroundColor = "red";
	rectangle.appendChild(ball);
}







/*var wrapper = $(this).parent();
    var parentOffset = wrapper.offset(); 
    var relX = e.pageX - parentOffset.left + wrapper.scrollLeft();
    var relY = e.pageY - parentOffset.top + wrapper.scrollTop();

    $(this).append($('<div/>').addClass('placeddiv').css({
        left: relX,
        top: relY
    }));*/