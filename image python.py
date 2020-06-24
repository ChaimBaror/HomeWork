from PIL import Image
import random


def r():
    return random.randint(0, 255)


im = Image.new('RGB', (1000, 1000))

list1 = [(r(), r(), r()) for i in range(1000000)]
print(list1)
f2 = open("C:\Users\Shira\Desktop\chaim\imagemew.jpg","wb")
# im.putdata(list1)
f2.write(list1)
# im.show()
# print(type(im))

