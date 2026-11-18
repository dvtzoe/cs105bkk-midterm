a = [1, 2, 3]  # `a` points to a list object
b = a  # aliasing: `b` points to the same object as `a`
b.append(4)  # change the list `b` is pointing to.
print(a)  # `a` refers the the same changed list.
print(a is b)  # to see if a and b are the same object.
c = a.copy()  # a new separated list with the same value.
print(c == a, c is a)
