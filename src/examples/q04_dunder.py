class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):          # repr(p): for developers
        return f"Point({self.x}, {self.y})"
    def __str__(self):           # print(p): for users
        return f"({self.x}, {self.y})"
    def __eq__(self, other):     # p == q
        return (self.x, self.y) == (other.x, other.y)
p = Point(1, 2); print(repr(p), p, p == Point(1, 2))
