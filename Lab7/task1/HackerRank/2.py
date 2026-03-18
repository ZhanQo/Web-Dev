n = int(input())
arr = list(map(int, input().split()))

arr = list(set(arr))   # убираем дубликаты
arr.sort()             # сортируем

print(arr[-2])         # второй с конца