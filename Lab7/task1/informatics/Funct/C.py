def fu(a,b):
    if a==1 and b==1:
        return 1
    else:
        return 0
    
    
a,b=map(int, input().split())
print(fu(a,b))