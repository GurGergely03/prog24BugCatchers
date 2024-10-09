from PIL import Image, ImageDraw,ImageFont
import matplotlib.pyplot as plt
import matplotlib.patches as patches
img = Image.open("RotatingEarth/transparent.png")
draw = ImageDraw.Draw(img)
#txt = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa here"
#draw.text((250, 550), txt, fill =(255, 255, 255), font=ImageFont.truetype('arial.ttf',35))
#img.save('RotatingEarth/shield.png')
# Get the current reference
p1 = (50,0)
p2 = (150,0)
p3 = (200,75)
p4 = (150,150)
p5 = (50,150)
p6 = (0,75)

x = 0
y = 200
rect1 = ((p1[0]+x,p1[1]+y),(p2[0]+x,p2[1]+y),(p3[0]+x,p3[1]+y),(p4[0]+x,p4[1]+y),(p5[0]+x,p5[1]+y),(p6[0]+x,p6[1]+y))

x = 150
y = 275
rect2 = ((p1[0]+x,p1[1]+y),(p2[0]+x,p2[1]+y),(p3[0]+x,p3[1]+y),(p4[0]+x,p4[1]+y),(p5[0]+x,p5[1]+y),(p6[0]+x,p6[1]+y))

x = 300
y = 350
rect3 = ((p1[0]+x,p1[1]+y),(p2[0]+x,p2[1]+y),(p3[0]+x,p3[1]+y),(p4[0]+x,p4[1]+y),(p5[0]+x,p5[1]+y),(p6[0]+x,p6[1]+y))

x = 0
y = 350
rect4 = ((p1[0]+x,p1[1]+y),(p2[0]+x,p2[1]+y),(p3[0]+x,p3[1]+y),(p4[0]+x,p4[1]+y),(p5[0]+x,p5[1]+y),(p6[0]+x,p6[1]+y))

x = 300
y = 200
rect5 = ((p1[0]+x,p1[1]+y),(p2[0]+x,p2[1]+y),(p3[0]+x,p3[1]+y),(p4[0]+x,p4[1]+y),(p5[0]+x,p5[1]+y),(p6[0]+x,p6[1]+y))

draw.polygon(rect1, fill="lightblue")
draw.polygon(rect2, fill="red")
draw.polygon(rect3, fill="lightgreen")
draw.polygon(rect4, fill="green")
draw.polygon(rect5, fill="white")

img.save("RotatingEarth/shield.png")