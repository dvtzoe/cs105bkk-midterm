class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius  # uses the setter

    @property
    def kelvin(self):  # read like an attribute
        return self._celsius + 273.15
