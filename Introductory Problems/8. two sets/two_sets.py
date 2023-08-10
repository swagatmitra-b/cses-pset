def two_sets(n):
    set1 = []
    set2 = []
    full_set = [i+1 for i in range(n)]
    list_sum = sum(full_set)
    full_set.reverse()
    if list_sum % 2 != 0:
        print('NO')
    else:
        mid_value = list_sum / 2
        for num in full_set:
            if num <= mid_value:
                set1.append(num)
                mid_value -= num
            else:
                set2.append(num)
        print(len(set1), set1)
        print(len(set2), set2)


two_sets(8)
