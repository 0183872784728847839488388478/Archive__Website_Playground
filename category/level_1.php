<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="../css/index.css">
    </head>
    <body>
        <center>
			<div class="container">
                <div class="level_1">
					<div class="col-md-4 col-xs-6">
                        <p>[---------------------------------------]</p>
                    </div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="level-1">
                            <source src="../sound/level/level_1.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('level-1').play()">Level 1</button></div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="level_1_inst">
                            <source src="../sound/inst/level_1_inst.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('level_1_inst').play()">Instruction</button></div>
                    <div class="col-md-4 col-xs-6">
                        <p>[---------------------------------------]</p>
                    </div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="forward">
                            <source src="../sound/action/forward.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('forward').play()">Forward</button></div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="backward">
                            <source src="../sound/action/backward.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('backward').play()">Backward</button></div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="jump">
                            <source src="../sound/action/jump.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('jump').play()">Jump</button></div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="left">
                            <source src="../sound/action/left.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('left').play()">Left</button></div>
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="right">
                            <source src="../sound/action/right.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('right').play()">Right</button></div>
                </div>
			</div>
        </center>
    </body>
</html>