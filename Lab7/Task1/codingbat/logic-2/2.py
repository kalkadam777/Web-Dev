def lone_sum(a, b, c):
    # Check if all values are unique
    if a != b and a != c:
        sum = a
    else:
        sum = 0
    if b != a and b != c:
        sum += b
    if c != a and c != b:
        sum += c

    return sum
