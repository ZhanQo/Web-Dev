x=int(input())
res= ""
while x>0:
    w = x%10
    res+=str(w)
    x//=10
print(res)