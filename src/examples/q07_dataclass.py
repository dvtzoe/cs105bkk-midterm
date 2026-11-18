from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    classes: list[str] = field(default_factory=list)

s = Student("Anna", ["183", "227"])  # auto __init__
print(s)  # auto __repr__
print(s == Student("Anna", ["183", "227"]))  # auto __eq__
