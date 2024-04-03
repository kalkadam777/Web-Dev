from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=60)
    
    def __str__(self):
        return f"ID: {self.id} Name: {self.name}"
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='products')

    def __str__(self):
        return f"ID: {self.id} Name: {self.name} Description: {self.description} Price: {self.price} Count: {self.count} Active: {self.is_active}"
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count,
            'active': self.is_active
        }
    
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

