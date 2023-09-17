<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="./css/index.css">
		<link rel="stylesheet" href="./css/tabs.css">
		<script src="./js/tabs.js"></script>
		<script>
			function resizeIframe(obj) {
				obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
			}

		</script>
    </head>
    <body>
        <center>
            <div class="container">
                <div class="row">
                    <div class="text-center">
                        <h3>Corrupteddroid Panel</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-xs-6"><audio preload="auto" id="start">
                            <source src="./sound/panel/start.mp3" type="audio/mpeg">
                        </audio><button type="button" class="btn btn-lg btn-block" onclick="document.getElementById('start').play()">Start</button></div>
                </div>
			</div>
			<div id="picker" class="tab">
                <button class="tablinks" onclick="tab('level_1')">Level 1</button>
				<button class="tablinks" onclick="tab('level_2')">Level 2</button>
				<button class="tablinks" onclick="tab('level_3')">Level 3</button>
				<button class="tablinks" onclick="tab('level_4')">Level 4</button>
				<button class="tablinks" onclick="tab('level_5')">Level 5</button>
			</div>
			<div id="viewer" class="">
				<div id="level_0" class="tabcontent">
					<iframe id="reload"src="./category/level_0.php" style="border:0px #ffffff none;" name="level_3" scrolling="no" frameborder="1" onload="resizeIframe(this)" allowfullscreen></iframe>
				</div>
                <div id="level_1" class="tabcontent">
					<iframe id="reload"src="./category/level_1.php" style="border:0px #ffffff none;" name="level_1" scrolling="no" frameborder="1" onload="resizeIframe(this)" allowfullscreen></iframe>
				</div>
				<div id="level_2" class="tabcontent">
					<iframe id="reload"src="./category/level_2.php" style="border:0px #ffffff none;" name="level_2" scrolling="no" frameborder="1" onload="resizeIframe(this)" allowfullscreen></iframe>
				</div>
				<div id="level_3" class="tabcontent">
					<iframe id="reload"src="./category/level_3.php" style="border:0px #ffffff none;" name="level_3" scrolling="no" frameborder="1" onload="resizeIframe(this)" allowfullscreen></iframe>
				</div>
				<div id="level_4" class="tabcontent">
					<iframe id="reload"src="./category/level_4.php" style="border:0px #ffffff none;" name="level_3" scrolling="no" frameborder="1" onload="resizeIframe(this)" allowfullscreen></iframe>
				</div>
				<div id="level_5" class="tabcontent">
					<iframe id="reload"src="./category/level_5.php" style="border:0px #ffffff none;" name="level_3" scrolling="no" frameborder="1" onload="resizeIframe(this)" allowfullscreen></iframe>
				</div>
			</div>
			
        </center>
    </body>
	<footer>
		<p>test</p>
	</footer>
</html>