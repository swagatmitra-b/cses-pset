def weird_algo(n):
    print(n)
    if n == 1:
        return
    weird_algo(n/2) if n % 2 == 0 else weird_algo(n*3+1)


weird_algo(3)
