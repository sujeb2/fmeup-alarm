function detectMobileDevice(agent) {
    const mobileRegex = [
      /Android/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ]
  
    return mobileRegex.some(mobile => agent.match(mobile))
  }
  
  const isMobile = detectMobileDevice(window.navigator.userAgent)

if(isMobile) {
    console.warn("user is mobile device returning alternative site.");
    location.href = '.\\src\\html\\goddamnusingmobile.html';
} else {
    console.info("skipping.");
}