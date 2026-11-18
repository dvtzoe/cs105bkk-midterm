class Dog:                        # class = blueprint
    def __init__(self, name):
        self.name = name          # data per object
    def bark(self):
        return f"{self.name} says woof"

rex = Dog("Rex")                  # objects (instances)
fido = Dog("Fido")
print(rex.bark())
print(fido.bark(), type(fido).__name__)
