class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius        # uses the setter
    @property
    def celsius(self):                # read like an attribute
        return self._celsius
    @celsius.setter
    def celsius(self, value):         # every write is checked
        if value < -273.15: raise ValueError("too cold")
        self._celsius = value
