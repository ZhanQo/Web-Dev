from model import Product, Laptop, Phone


def main():
    product1 = Product("Smart Device", 300, "Generic")
    laptop1 = Laptop("ThinkPad X1", 1200, "Lenovo", 16)
    phone1 = Phone("iPhone 14", 999, "Apple", 48)

    products = [product1, laptop1, phone1]

    for item in products:
        print(item)
        print(item.get_info())
        print(item.use())
        print("-" * 40)

    print("Polymorphism demonstration:")
    for item in products:
        print(f"{item.name}: {item.use()}")

    print("-" * 40)
    print(laptop1.code())
    print(phone1.take_photo())


if __name__ == "__main__":
    main()