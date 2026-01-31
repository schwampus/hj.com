const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
const mouse = { x: null, y: null, radius: 150 };

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 10 + 5;
  }
  
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.7)'; // Splatter color
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  
  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    
    if (distance < mouse.radius) {
      this.x -= forceDirectionX * force * this.density;
      this.y -= forceDirectionY * force * this.density;
    } else {
      if (this.x !== this.baseX) {
        this.x -= (this.x - this.baseX) / 10;
      }
      if (this.y !== this.baseY) {
        this.y -= (this.y - this.baseY) / 10;
      }
    }
  }
}

function init() {
  canvas.width = 1200;
  canvas.height = 800;
  
  // Create particles
  for (let i = 0; i < 300; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  requestAnimationFrame(animate);
}

// Mouse movement handler
window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Resize handler
window.addEventListener('resize', () => {
  canvas.width = 1200;
  canvas.height = 800;
});

init();
animate();