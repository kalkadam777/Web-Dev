n = int(input())

l = list(map(int,input().split()))
cnt = 0
for i in l:
    if(i>0):
        cnt+=1
print(cnt)