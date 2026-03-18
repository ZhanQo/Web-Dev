class Product:
    def __init__(self, name, price, brand):
        self.name = name
        self.price = price
        self.brand = brand

    def get_info(self):
        return f"Name: {self.name}, Price: {self.price}, Brand: {self.brand}"

    def use(self):
        return f"{self.name} is being used."

    def __str__(self):
        return f"{self.brand} {self.name} - ${self.price}"


class Laptop(Product):
    def __init__(self, name, price, brand, ram):
        super().__init__(name, price, brand)
        self.ram = ram

    def use(self):
        return f"{self.name} is used for programming and studying."

    def code(self):
        return f"You can write code on {self.name} with {self.ram}GB RAM."

    def __str__(self):
        return f"Laptop: {self.brand} {self.name} - ${self.price}, RAM: {self.ram}GB"


class Phone(Product):
    def __init__(self, name, price, brand, camera_mp):
        super().__init__(name, price, brand)
        self.camera_mp = camera_mp

    def use(self):
        return f"{self.name} is used for calling and messaging."

    def take_photo(self):
        return f"{self.name} takes photos with {self.camera_mp}MP camera."

    def __str__(self):
        return f"Phone: {self.brand} {self.name} - ${self.price}, Camera: {self.camera_mp}MP"