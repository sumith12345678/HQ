import os
from PIL import Image

src_dir = 'assets/hq-images-webp'
dest_dir = 'assets/hq-images-optimized'

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for filename in os.listdir(src_dir):
    if filename.endswith('.webp'):
        src_path = os.path.join(src_dir, filename)
        dest_path = os.path.join(dest_dir, filename)
        
        with Image.open(src_path) as img:
            # Resize image to max 1200 width while maintaining aspect ratio
            img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
            img.save(dest_path, 'WEBP', quality=85)
            print(f"Optimized {filename}")
