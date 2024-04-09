
from django.urls import path
from .views import company_list, company_detail, vacancy_by_company,vacancy_list, vacancy_detail,vacancy_top_ten


urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:pk>/', company_detail),
    
    path('companies/<int:pk>/vacancies/',vacancy_by_company),
    
    path('vacancies/', vacancy_list),
    path('vacancies/<int:pk>/', vacancy_detail),
    
    path('vacancies/top_ten/',vacancy_top_ten),
]