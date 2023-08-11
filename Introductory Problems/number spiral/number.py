def number_spiral(x, y): 
    largest = max(x, y)
    smallest = min(x, y)
    value = largest ** 2
    b = 1
    while b < largest:
        value -= 1
        b = b + 1
        if x > y and b == smallest:
            print(value);
            return
    while largest > smallest:
        value -= 1
        largest = largest - 1
    print(value);

number_spiral(3, 2)