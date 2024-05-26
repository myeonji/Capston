import React from 'react';
import axios from 'axios';

function Test(){
    return(
    <div className='Body'>
<PostRequestComponent/>
</div>)
}


const PostRequestComponent = () => {
    const handlePostRequest = async () => {
      const payload = {
        prompt: "close-up photography of old man standing in the rain at night, in a street lit by lamps, leica 35mm summilux",
        num_inference_steps: 4,
        guidance_scale: 1
      };
  
      try {
        const response = await axios.post('/txt2img', payload, {
          headers: {
            'accept': 'image/*',
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
  
    return (
      <div>
        <button onClick={handlePostRequest}>Send POST Request</button>
      </div>
    );
  };

  export default Test