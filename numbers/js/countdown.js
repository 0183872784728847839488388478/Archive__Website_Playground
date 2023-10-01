var startTimer = (function ($) {
    // Length ms 
    var TimeOut = 10000;
    // Interval ms
    var TimeGap = 1000;
    
    var CurrentTime = ( new Date() ).getTime();
    var EndTime = ( new Date() ).getTime() + TimeOut;
    
    
    var Running = true;
    
    var UpdateTimer = function() {
        // Run till timeout
        if( CurrentTime + TimeGap < EndTime ) {
            setTimeout( UpdateTimer, TimeGap );
        }
        // Countdown if running
        if( Running ) {
            CurrentTime += TimeGap;
            if( CurrentTime >= EndTime ) {
            }
        }
        // Update Gui
        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();

        
        
        
        var weiropiwepri = (Minutes < 10 ? '0' : '') + Minutes;
        var vnsimohrgemr = (Seconds < 10 ? '0' : '') + Seconds;
        var eruytoieufgioe = weiropiwepri + '' + vnsimohrgemr;
        var fhgiornivhnr = eruytoieufgioe.split("");

        document.getElementById('progress_time').setAttribute("value", fhgiornivhnr[2]+'' + fhgiornivhnr[3]);
        
        document.getElementById('time_seconds_tens').setAttribute("value", fhgiornivhnr[2]);
        document.getElementById('time_seconds_ones').setAttribute("value", fhgiornivhnr[3]);

        console.log("updategui:" + fhgiornivhnr);
        

    };
    
    var Pause = function() {
        Running = false;
        console.log("pause")
    };
    
    var Resume = function() {
        Running = true;
        console.log("resume")
    };
    
    var Start = function( Timeout ) {
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        console.log("start")
        document.getElementById('progress_time').setAttribute("max", TimeOut/1000);
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);

