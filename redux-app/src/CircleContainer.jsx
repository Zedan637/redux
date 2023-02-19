import { useState } from 'react';

function Circle() {
  const [isGray, setIsGray] = useState(false);

  const handleClick = () => {
    setIsGray(!isGray);
  };

  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: isGray ? 'gray' : 'red',
  };

  return (
    <div style={circleStyle} onClick={handleClick}></div>
  );
}

function CircleContainer() {
  const [circles, setCircles] = useState([]);

  const handleButtonClick = () => {
    setCircles([...circles, <Circle key={circles.length} />]);
  };

  const circleCount = circles.length;

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleButtonClick}>Add Circle</button>
        <span style={{ marginLeft: '10px' }}>{circleCount}</span>
      </div>
      {circles.map((circle, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          {circle}
        </div>
      ))}
    </div>
  );
}

export default CircleContainer;