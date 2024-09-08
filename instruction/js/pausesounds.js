document.getElementById('stopButton').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(el => el.pause(),
el.currentTime = 0;);
  });
  