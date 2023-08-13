def distinct_numbers(n, *arr): 
    list2 = []
    for i in range(n): 
        if len(list2) == 0: 
            list2.append(arr[i])
            continue
        for j in range(len(list2)): 
            if list2[j] == arr[i]:
                break
            if j == len(list2) - 1:
                list2.append(arr[i])
    print(list2)
    return len(list2)

print(distinct_numbers(5, 2, 3, 2, 2, 3))
