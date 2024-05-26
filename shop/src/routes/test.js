import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Test(){
    return(
    <div className='Body'>
<PostRequestComponent/>
</div>)
}


const PostRequestComponent = () => {
  const [imageSrc, setImageSrc] = useState(null);

    const handlePostRequest = async () => {
      const payload = {
        prompt: "close-up photography of old man standing in the rain at night, in a street lit by lamps, leica 35mm summilux",
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

  export default Test