
from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    
    class Meta:
        verbose_name = 'Company',
        verbose_name_plural = 'Companies'
        
    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }
    
    
class Vacancy(models.Model):
    name = models.CharField(max_length=150, null=True)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')
    
    class Meta:
        verbose_name = 'Vacancy',
        verbose_name_plural = 'Vacancies'
        
    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name
        }
    