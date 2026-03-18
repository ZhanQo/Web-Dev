x=int(input())
cnt=0
arr = list(map(int, input().split()))
for i in range(x-1):
    if arr[i] < arr[i + 1]:
        cnt += 1
print(cnt)