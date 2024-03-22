n = int(input())

l = list(map(int,input().split()))
cnt = 0

for i in range(1,n):
    if(l[i-1]<l[i]):
        cnt+=1
print(cnt)