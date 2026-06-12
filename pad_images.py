from PIL import Image
import os

files = [
    "public/images/python.png",
    "public/images/powerbi.png",
    "public/images/excel.png",
    "public/images/sql.png"
]

target_size = 1024
icon_size = 500

for file in files:
    if not os.path.exists(file):
        print(f"File not found: {file}")
        continue
    
    img = Image.open(file).convert("RGBA")
    
    # Calculate aspect ratio
    aspect = img.width / img.height
    if aspect > 1:
        new_w = icon_size
        new_h = int(icon_size / aspect)
    else:
        new_h = icon_size
        new_w = int(icon_size * aspect)
        
    img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create new transparent image
    new_img = Image.new("RGBA", (target_size, target_size), (255, 255, 255, 0))
    
    # Paste centered
    x = (target_size - new_w) // 2
    y = (target_size - new_h) // 2
    
    new_img.paste(img, (x, y), img)
    
    # Save back
    new_img.save(file)
    print(f"Processed {file}")
