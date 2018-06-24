import React, {
  Component
} from 'react';
import './Circle.css';

class Circle extends Component {

  componentDidMount() {
    this.draw();
  }

  draw() {
    const {time,topTime} = this.props;
    const canvas = document.getElementById(`canvas${this.props.time}`);

    const deg = 360 / topTime;
    const eachTimeDeg = deg * time;
    const timeAngle = eachTimeDeg / 180;

    if (canvas.getContext) {
      const context = canvas.getContext('2d');
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const radius = 100;

      const startAngle = (1 + (timeAngle / 2 ))  * Math.PI;
      const endAngle = (1 - (timeAngle / 2 ))  * Math.PI;
      const counterClickwise = false;

      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClickwise)

      const grd = context.createLinearGradient(0, 0, 0, 170);
      grd.addColorStop(0, "blue");
      grd.addColorStop(1, "violet");
      context.fillStyle = grd;
      context.fill();
    }
  }

  render() {
    const {time} = this.props;
    return ( < div className = "circleContainer" >
      <
      canvas id = {`canvas${time}`}
      width = "200"
      height = "200"
      className = "canvas" >
      <
      /canvas> <
      div className = "circleText" > < strong > {time} < /strong> Min< /div > < /
      div > );
  }
}

export default Circle;
