class Animal:
    def speak(self): return "..."
class Cat(Animal):                 # Cat IS an Animal
    def speak(self): return "meow"

class Engine:
    def start(self): return "vroom"
class Car:                         # Car HAS an Engine
    def __init__(self): self.engine = Engine()
print(Cat().speak(), Car().engine.start())
