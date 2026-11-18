a = [1, 2, 3]       # the name `a` points to a list object
b = a               # alias: `b` points to the SAME object
b.append(4)         # change it through `b` ...
print(a)            # ... and `a` sees it too
print(a is b)       # same object?
c = a.copy()        # a NEW object with equal contents
print(c == a, c is a)
