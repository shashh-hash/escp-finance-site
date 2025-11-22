from PIL import Image
from collections import Counter
import sys

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        # Resize for faster processing
        img = img.resize((100, 100))
        
        pixels = list(img.getdata())
        
        # Filter out transparent or near-white/black pixels to find the blue
        valid_pixels = []
        for r, g, b, a in pixels:
            if a < 128: continue # Skip transparent
            if r > 240 and g > 240 and b > 240: continue # Skip white
            if r < 20 and g < 20 and b < 20: continue # Skip black
            valid_pixels.append((r, g, b))
            
        if not valid_pixels:
            print("No colored pixels found")
            return

        counts = Counter(valid_pixels)
        most_common = counts.most_common(5)
        
        print("Dominant colors found:")
        for color, count in most_common:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"Hex: {hex_color} (Count: {count})")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        get_dominant_color(sys.argv[1])
    else:
        print("Usage: python extract_color.py <image_path>")
