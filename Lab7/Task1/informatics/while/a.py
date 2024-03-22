import math
a = int(input())
i=1
while True:
    square = i * i
    if square <= a:
        print(square)
        i += 1
    else:
        break