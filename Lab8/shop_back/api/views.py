from django.shortcuts import render
from django.http.response import HttpResponse,JsonResponse

from api.models import Category, Product

def get_categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    
    return JsonResponse(categories_json, safe=False)

def get_category(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
        return JsonResponse(category.to_json())
        
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
        
def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    
    return JsonResponse(products_json, safe=False)


def get_product(request, pk=None):
    try:
        product = Product.objects.get(id=pk)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
        
def get_category_products(request, pk=None):
    try:
        products = Product.objects.all().filter(pk=pk)
        products_json = [product.to_json() for product in products]
        return JsonResponse(products_json, safe=False)
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })