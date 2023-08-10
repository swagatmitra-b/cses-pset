def missing_num(n, *args):
    print(args)
    full_list = [i+1 for i in range(n)]
    for num in full_list:
        if num not in list(args):
            print(num)

missing_num(5, 2, 3, 1, 5)
