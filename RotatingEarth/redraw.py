from PIL import Image, ImageDraw,ImageFont
import matplotlib.pyplot as plt
img = Image.open("RotatingEarth/transparent.png")
draw = ImageDraw.Draw(img)
txt = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa here"
draw.text((250, 550), txt, fill =(255, 255, 255), font=ImageFont.truetype('arial.ttf',35))
img.save('RotatingEarth/shield.png')