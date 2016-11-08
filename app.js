var X, Y, play;
var collision = 0;
var canvas = {
    element: document.getElementById('canvas'),
    width: 600,
    height: 400,
    initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        document.body.appendChild(this.element);
    }
};

var Ball = {
    create: function (color, dx, dy) {
        var newBall = Object.create(this);
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 40;
        newBall.height = 40;
        newBall.element = document.createElement('div');
        newBall.element.style.backgroundColor = color;
        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';
        newBall.element.className += ' ball';
        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);
        canvas.element.appendChild(newBall.element);
        return newBall;
    },
    moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    changeDirectionIfNecessary: function (x, y) {
        if (x < 0 || x > canvas.width - this.width) {
            this.dx = -this.dx;
        }
        else if (y < 0 || y > canvas.height - this.height) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        this.moveTo(x, y);
        var ball = this;
        var speed;
        var range = document.getElementById("range-input").value;
        speed = 1000/document.getElementById("range-input").value;
        var play = setTimeout(function() {
            ball.changeDirectionIfNecessary(x, y);
            ball.draw(x + ball.dx, y + ball.dy);
            X = x;
            Y = y;
            //ball.wallCollision(x, y);
        },speed);
        /*setTimeout(function() {
            ball.wallCollision(x, y);
        }, 3000);*/

        /*setTimeout(function () {
            ball.changeDirectionIfNecessary(x, y);
            ball.draw(x + ball.dx, y + ball.dy);
        }, speed);*/
    },
    wallCollision: function() {
        var x = X;
        var y = Y;
        if (x < 0 || x > canvas.width - this.width) {
            collision = collision + 1;
        }
        else if (y < 0 || y > canvas.height - this.height) {
            collision = collision + 1;
        }
        else {
            if (collision <= 0) {
                collision = 0;
            }
            else collision = collision - 1;
        }
        console.log(collision);
    },
    pause: function() {
        var ball = this;
        clearTimeout(play);
    }
};

canvas.initialize();

/*var pause = function() {
    cancelAnimationFrame(Ball.draw);
}
*/
function getMousePos(evt) {
    var rect = document.getElementById("canvas").getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}

var newBall = function(e)   {
    var colors = ['red', 'blue', 'green'];
    var direction = [-1, 1];
    var ballcolor = colors[Math.floor(Math.random()*colors.length)];
    var mousePos = getMousePos(e);
    var relX = mousePos.x ;
    var relY = mousePos.y;
    if (relX > 559 || relY > 359) return;
    else {
        var ball1 =  Ball.create(ballcolor, 4 * direction[Math.floor(Math.random()*direction.length)], 3 * direction[Math.floor(Math.random()*direction.length)]);
        ball1.draw(relX, relY)
    }    
}

var range = document.getElementById("range-input");
range.addEventListener('change', function(e){
    var rangeVal = document.getElementById("range");
    rangeVal.innerHTML = range.value + "%";
})
