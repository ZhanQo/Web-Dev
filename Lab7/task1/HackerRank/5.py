def solve(s):
    result = []
    for word in s.split(" "):
        result.append(word.capitalize())
    return " ".join(result)

s = input()
print(solve(s))