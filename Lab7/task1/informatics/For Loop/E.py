x=int(input())
ttl=0
while x>0:
    ttl += x%10
    x//=10
print(ttl)