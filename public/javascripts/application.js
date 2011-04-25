// application.js

function human_size(bytes) {
  var s = ['bytes', 'kb', 'MB', 'GB', 'TB', 'PB'];
  var e = Math.floor(Math.log(bytes)/Math.log(1024));
  return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
}

$(document).ready(function(){
  
  // new invitation form

  $("input#invitation_email").ezpz_hint();

  function newInvitationSubmit() {
    $("#new_invitation_status").html('<img src="/images/spinner1.gif" /></div>');
    $("#new_invitation_submit").attr("value", "sending...").attr("disabled", true);
  }

  function newInvitationSuccess() {
    $("#new_invitation_submit").attr("value", "send").attr("disabled", false);
  }

  $('#new_invitation').ajaxForm({
    target : '#new_invitation_status',
    beforeSubmit : newInvitationSubmit,
    success : newInvitationSuccess,
    clearForm : true,
    resetForm : true
  });

  // soundmanager
  
  // demo only, but you can use these settings too..
  soundManager.flashVersion = 9;
  soundManager.useHighPerformance = true; // keep flash on screen, boost performance
  soundManager.wmode = 'transparent'; // transparent SWF, if possible
  soundManager.useFastPolling = true; // increased JS callback frequency
  soundManager.url = '/flash/';

  // custom page player configuration

  var PP_CONFIG = {
    autoStart: false,      // begin playing first sound when page loads
    playNext: true,        // stop after one sound, or play through list until end
    useThrottling: false,  // try to rate-limit potentially-expensive calls (eg. dragging position around)</span>
    usePeakData: true,     // [Flash 9 only] whether or not to show peak data (left/right channel values) - nor noticable on CPU
    useWaveformData: false,// [Flash 9 only] show raw waveform data - WARNING: LIKELY VERY CPU-HEAVY
    useEQData: false,      // [Flash 9 only] show EQ (frequency spectrum) data
    useFavIcon: false,     // try to apply peakData to address bar (Firefox + Opera) - performance note: appears to make Firefox 3 do some temporary, heavy disk access/swapping/garbage collection at first(?) - may be too heavy on CPU
    useMovieStar: true     // Flash 9.0r115+ only: Support for a subset of MPEG4 formats.
  }

  // var sm = soundManager;
  // 
  // sm.url = '/flash';
  // sm.debugMode = false;
  // sm.useConsole = false;
  // sm.useHighPerformance = true;
  // soundManager.flashVersion = 9;
  // sm.useMovieStar = true; // MP4/M4A/AAC
  // 
  // sm.onready(function(){
  //   $('a.post').each(function(){
  //     $(this).makePlayable();
  //   });
  // });
  // 
  // $.fn.makePlayable = function(){
  //   $(this).addClass('playable');
  // 
  //   soundManager.createSound({
  //    id:$(this).attr('id'),
  //    url:$(this).attr('href'),
  //    onfinish:function(){
  //      $('#'+this.sID).parent().next().find('a.playable').play();
  //    }
  //   });
  // 
  //   $(this).click(function(e){
  //     e.preventDefault();
  //     $(this).play();
  //   });
  // };
  // 
  // $.fn.play = function(){
  //   if ($(this).hasClass('playing')){
  //     $(this).removeClass('playing');
  //     $(this).addClass('paused');
  //     sm.pause($(this).attr('id'));
  //     return;
  //   } if ($(this).hasClass('paused')){
  //     $(this).removeClass('paused');
  //     $(this).addClass('playing');
  //     sm.resume($(this).attr('id'));
  //     return;
  //   } else {
  //     sm.stopAll();
  //     $('.playing').removeClass('playing');
  //     $('.paused').removeClass('paused');
  //     $(this).addClass('playing');
  //     sm.play($(this).attr('id'));
  //     return;
  //   }
  // };

});
