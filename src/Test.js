import React, {Component} from 'react';
import './Test.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }
  /*
  componentDidMount(){
    const {time, topTime} = this.props;
    var canvas = document.getElementById('bar'),
        width = canvas.width,
        height = canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 45;
    ctx.strokeStyle = '#0f0';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#0f0';
    var x = width / 2,
        y = height / 2,
        radius = 120,
        circum = Math.PI * 2,
        start = Math.PI / -2, // Start position (top)
        finish = 77, // Finish (in %)
        curr = 0; // Current position (in %)
    var raf =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.requestAnimationFrame = raf;
    function animate(draw_to) {
      // Clear off the canvas
      ctx.clearRect(0, 0, width, height);
      // Start over
      ctx.beginPath();
      // arc(x, y, radius, startAngle, endAngle, anticlockwise)
      // Re-draw from the very beginning each time so there isn't tiny line spaces between each section (the browser paint rendering will probably be smoother too)
      ctx.arc(x, y, radius, start, draw_to, false);
      // Draw
      ctx.stroke();
      // Increment percent
      curr++;
      // Animate until end
      if (curr < finish + 1) {
        // Recursive repeat this function until the end is reached
        requestAnimationFrame(function () {
          animate(circum * curr / 100 + start);
        });
      }
    }
    animate();
  }*/

  componentDidMount() {
    const {time, topTime} = this.props;
    const canvas = document.getElementById('bar'),
      width = canvas.width,
      height = canvas.height;
    const context = canvas.getContext('2d');
    context.lineWidth = 45;
    context.strokeStyle = '#0f0';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 10;
    context.shadowColor = '#0f0';
    const x = width / 2;
    const y = height / 2;
    const radius = 100;
    const deg = 360 / topTime;
    const eachTimeDeg = deg * time;
    const timeAngle = eachTimeDeg / 180;
    const startAngle = (1 + timeAngle / 2) * Math.PI;
    const endAngle = (1 - timeAngle / 2) * Math.PI;
    const counterClickwise = false;
    const circum = Math.PI * 2;
    const finish = 80;
    let curr = 0;
    const raf = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
      window.requestAnimationFrame = raf;
    function animate(draw_to) {
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(x, y, radius, startAngle, draw_to, false);

      const grd = context.createLinearGradient(0, 0, 0, 170);
      grd.addColorStop(0, 'blue');
      grd.addColorStop(1, 'violet');
      context.fillStyle = grd;
      context.fill();

      curr++;
      if (curr < finish + 1) {
        requestAnimationFrame(function() {
          animate(circum * curr / 100 + startAngle);
        });
      }
    }
    animate();
  }
  render() {
    const {time} = this.props;
    return (
      <div className="TestContainer">
        <canvas id="bar" width="200" height="200" className="testCanvas" />
        <div className="TestText"> <strong> {time} </strong> Min</div>
      </div>
    );
  }
}

export default Test;
