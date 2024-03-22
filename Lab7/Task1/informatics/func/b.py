a,n = map(float,input().split())

def power(a,n):
    if n == 0:
        return 1
    result = 1
    for _ in range(n):
        result *= a
    return result

print(power(a,int(n)))