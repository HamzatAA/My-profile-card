function displayTimeUTCformat() {
    const now = new Date();
    
    const formattedTime = now.toUTCString();
    
    document.getElementById('UTC_time').textContent = formattedTime;
  }
  
  window.onload = displayTimeUTCformat;
  
  setInterval(displayTimeUTCformat, 1000);
  

