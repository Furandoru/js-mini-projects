function updateClock() {
    const now = new Date();
  
    // Time (12-hour format with AM/PM)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');
  
    // Date
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();
    const dateString = `${dayOfWeek}, ${month} ${day}, ${year}`;
  
    // Update the clock and date on the page
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('date').textContent = dateString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  