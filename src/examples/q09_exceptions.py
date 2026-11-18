text = "abc"
try:
    age = int(text)  # raises ValueError
except ValueError as e:  # caught, program continues
    print("Not a number:", e)
