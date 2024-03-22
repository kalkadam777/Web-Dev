a,b = map(int, input().split())

def xor(a,b):
    if a==b:
        return 0
    else:
        return 1
    
print(xor(a,b))