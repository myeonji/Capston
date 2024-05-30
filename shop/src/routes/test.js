import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Test(){
    return(
    <div className='Body'>
<PostRequestComponent/>
<ToneOnTone></ToneOnTone>
</div>)
}


const PostRequestComponent = () => {
  const [imageSrc, setImageSrc] = useState(null);

    const handlePostRequest = async () => {
      const payload = {
        prompt: "A full-body shot of a person wearing a denim jacket, with their head out of the frame, on a grey solid color background.",
        num_inference_steps: 4,
        guidance_scale: 1
      };
  
      try {
        const response = await axios.post('/txt2img', payload, {
          headers: {
            'accept': 'image/png',
            'Content-Type': 'application/json'
          },
          responseType: 'blob'
        });
  
        const blob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
  
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
  
    return (
      <div>
        <button onClick={handlePostRequest}>Send POST Request</button>
        {imageSrc && <img src={imageSrc} alt="Generated" />}
      </div>
    );
  };


  

  // 기본 색상과 흰색 사이의 색상을 보간하는 함수
  const interpolateColor = (color, target, ratio) => {
    return color.map((c, i) => Math.round(c + (target[i] - c) * ratio));
  };
  
  // 톤온톤 색상 조합을 생성하는 함수
  const generateToneOnToneColors = (baseColor, steps) => {
    const white = [255, 255, 255];
    return Array.from({ length: steps }, (_, i) => 
      interpolateColor(baseColor, white, i / (steps - 1))
    );
  };
  
  // RGB 배열을 CSS 색상 문자열로 변환하는 함수
  const rgbToString = (color) => {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };
  
  const ToneOnTone = () => {
    const [baseColor, setBaseColor] = useState([100, 150, 30]);
    const [steps, setSteps] = useState(10);
    
    const colors = generateToneOnToneColors(baseColor, steps);
  
    return (
      <div>
        <h1>Tone-on-Tone Colors</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {colors.map((color, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: rgbToString(color), 
                width: '50px', 
                height: '50px' 
              }} 
            />
          ))}
        </div>
        <div>
          <label>
            Base Color: 
            <input 
              type="color" 
              value={rgbToString(baseColor)} 
              onChange={(e) => {
                const hexColor = e.target.value;
                setBaseColor([
                  parseInt(hexColor.slice(1, 3), 16),
                  parseInt(hexColor.slice(3, 5), 16),
                  parseInt(hexColor.slice(5, 7), 16),
                ]);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Steps: 
            <input 
              type="number" 
              value={steps} 
              onChange={(e) => setSteps(Number(e.target.value))} 
              min="2" 
            />
          </label>
        </div>
      </div>
    );
  };
  
  
  export default Test