import math

def apples(n, *weights):
    set1 = []
    set2 = []
    weights = list(weights)
    list_sum = sum(weights)
    mid_value = int(
        list_sum/2) if list_sum % 2 == 0 else int(math.floor(list_sum/2))
    for i in range(n-1):
        for j in range(i, n):
            if weights[j] > weights[i]:
                temp = weights[i]
                weights[i] = weights[j]
                weights[j] = temp
    for num in weights:
        if num <= mid_value:
            set1.append(num)
            mid_value -= num
        else:
            set2.append(num)
    print(set1, set2)


apples(5, 1, 5, 4, 9, 7)
