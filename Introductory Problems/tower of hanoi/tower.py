def tower_of_hanoi(n):
  print(2**n - 1)
  def recurse(n, left_stack, right_stack): 
    mid_stack = 6 - (left_stack + right_stack)
    if n == 1:
        print(left_stack, right_stack)
        return
    mid_stack = 6 - (left_stack + right_stack)
    recurse(n - 1, left_stack, mid_stack)
    print(left_stack, right_stack)
    recurse(n - 1, mid_stack, right_stack)
  return recurse


tower_of_hanoi(2)(2, 1, 3)