
import bentoml
from PIL.Image import Image

MODEL_ID = "ttthea/fashion-clothing"

sample_prompt = "A full-body shot of a person wearing a denim jacket, with their head out of the frame, on a grey solid color background."

@bentoml.service(
    traffic={"timeout": 300},
    workers=1,
    resources={
        "gpu": 1,
        "gpu_type": "nvidia-l4",
        
    },
)
class SD:
    def __init__(self) -> None:
        from diffusers import AutoPipelineForText2Image
        import torch

        self.pipe = AutoPipelineForText2Image.from_pretrained(
            MODEL_ID,
            torch_dtype=torch.float16,
           
        )
        self.pipe.to(device="cuda")

    @bentoml.api
    def txt2img(
            self,
            prompt: str = sample_prompt,
            
    ) -> Image:
        image = self.pipe(
            prompt=prompt,
           
        ).images[0]
        return image