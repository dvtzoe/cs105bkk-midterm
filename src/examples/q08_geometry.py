# geometry.py — a module is just a .py file
import math  # a standard-library module

def circle_area(r):
    return math.pi * r**2

if __name__ == "__main__":  # run this if not imported
    print(round(circle_area(2), 2))
