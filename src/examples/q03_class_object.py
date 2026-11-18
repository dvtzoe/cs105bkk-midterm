class Dog:  # class = schema
    def __init__(self, name):
        self.name = name  # data per object
    def bark(self):
        return f"{self.name} says woof"

hibiki = Dog("Hibiki")  # an object
umika = Dog("Umika") # another object
print(hibiki.bark())
print(umika.bark(), type(umika).__name__)
