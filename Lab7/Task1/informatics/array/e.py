n = int(input())

l = list(map(int,input().split()))
cnt = 0

for i in range(1,n):
    if (l[i-1]<0 and l[i]<0 ) or (l[i-1]>0 and l[i]>0):
        cnt+=1

if cnt>0:
    print("YES")
else :
    print("NO")