class Life():
    def meaning():
        return "42"
class Animal:
    def __init__(self):
        self.life = Life()
    def die(self):
        return "dead"
class Cow(Animal):  # Cow is an Animal 
    def __init__(self):
        super().__init__()
    def die(self):
        return "deadbeef"
print(Cow().die(), Cow().life.meaning())
# comment to make the code horizontally long so it resize the container
