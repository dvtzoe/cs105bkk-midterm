from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    grades: list[int] = field(default_factory=list)

s = Student("Ana", [90, 85])  # __init__ for free
print(s)                      # __repr__ for free
print(s == Student("Ana", [90, 85]))  # __eq__ too
