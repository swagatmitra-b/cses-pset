def coin(a, b): 
    if (a+b) % 3 == 0: 
        return 'YES'
    return 'NO'

print(coin(2, 1))
print(coin(2, 2))
print(coin(3, 3))
