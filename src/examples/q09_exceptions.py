text = "abc"
try:
    age = int(text)            # raises ValueError
except ValueError as e:        # caught, program continues
    print("Not a number:", e)
else:                          # only if nothing was raised
    print("Age is", age)
finally:                       # always runs
    print("done")
