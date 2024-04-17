from django.contrib import admin
from .models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address')
    search_fields = ('name',)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'salary', 'company')
    search_fields = ('name', )