def lucky_sum(a, b, c):
    sum = 0
    for num in [a, b, c]:
        if num == 13:
            break
        sum += num
    return sum