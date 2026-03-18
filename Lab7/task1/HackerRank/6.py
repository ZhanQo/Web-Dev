n = int(input())
students = []

for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])
scores = sorted(set(score for name, score in students))

second_lowest = scores[1]

result = [name for name, score in students if score == second_lowest]
result.sort()
for name in result:
    print(name)