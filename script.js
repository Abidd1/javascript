// import {onCLS, onINP, onLCP} from 'web-vitals';

// function sendToAnalytics(metric) {
//   const body = JSON.stringify(metric);
//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
//     fetch('/analytics', {body, method: 'POST', keepalive: true});
// }

// onCLS(sendToAnalytics);
// onINP(sendToAnalytics);
// onLCP(sendToAnalytics);
function checkAddress()
{
  let email = document.getElementById("email").value;
  if (email === ""){
    alert("email required")
    return false;
  }
}