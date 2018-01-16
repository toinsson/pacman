
var WITH_AUDIO = false;


var controlDisplay = function() {
    this.htmlbtn = document.getElementById('touches');
    this.x = 0;
    this.y = 0;
};

controlDisplay.prototype.init = function() {
    this.controller = document.getElementById('controller');
    this.ctx = this.controller.getContext("2d");
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.controller.width, this.controller.height);

};

controlDisplay.prototype.moveX = function(value) {
    // body...
    this.x += value;
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x+50,this.y+50,10,10);
};

controlDisplay.prototype.moveY = function(value) {
    // body...
    this.y += value;
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x+50,this.y+50,10,10);
};

cdobj = new controlDisplay()

// controlDisplay = document.getElementById('touches')


function test() {

    var controller;
    controller = document.getElementById('controller');

    cdobj.init();

    console.log(controller);

    // var ctx = controller.getContext("2d");
    // ctx.moveTo(0,0);
    // ctx.lineTo(200,100);
    // ctx.stroke();


    document.getElementById('audiobutton').onclick = testMyCallBack;


    function testMyCallBack() {
        console.log(document.getElementById('audiobutton').value)

        WITH_AUDIO = this.control.checked;

        console.log('button clicked');
        }
};

