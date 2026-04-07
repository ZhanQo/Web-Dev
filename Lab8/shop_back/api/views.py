from django.http import JsonResponse
from .models import Product, Category
import json

def products(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        name = data.get('name')
        price = data.get('price')

        
        if Product.objects.filter(name=name).exists():
            return JsonResponse({
                "error": "Product with this name already exists",
                "data": data
            }, status=400)

        
        if price <= 0:
            return JsonResponse({
                "error": "Price must be greater than 0",
                "data": data
            }, status=400)

        
        product = Product.objects.create(
            name=name,
            price=price,
            description=data.get('description'),
            count=data.get('count'),
            is_active=data.get('is_active'),
            category_id=data.get('category')
        )

        return JsonResponse({
            "message": "Product created",
            "id": product.id
        })