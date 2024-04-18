
from django.urls import path
from api.views import company_list, company_detail, vacancy_by_company,vacancy_list, vacancy_detail,vacancy_top_ten
from api.views import CompanyListAPIView, CompanyDetailAPIView, VacancyListAPIView, VacancyDetailAPIView, VacancyByCompanyAPIView, VacancyTopTenAPIView

urlpatterns = [
    
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    
    path('companies/<int:pk>/vacancies/',VacancyByCompanyAPIView.as_view()),
    
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    
    path('vacancies/top_ten/',VacancyTopTenAPIView.as_view()),
    
    
    
    # path('companies/', company_list),
    # path('companies/<int:pk>/', company_detail),
    
    # path('companies/<int:pk>/vacancies/',vacancy_by_company),
    
    # path('vacancies/', vacancy_list),
    # path('vacancies/<int:pk>/', vacancy_detail),
    
    # path('vacancies/top_ten/',vacancy_top_ten),
]