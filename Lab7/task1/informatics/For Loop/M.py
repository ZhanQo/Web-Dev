x=int(input())
cnt=0
for _ in range(x):
    y=input()
    cnt+=y.count("0")
print(cnt)