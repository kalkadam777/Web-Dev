from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import json
from .models import Company, Vacancy

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company_description = data.get('description', '')
        company_city = data.get('city', '')
        company_address = data.get('address', '')
        company = Company.objects.create(
            name= company_name,
            description= company_description,
            city = company_city,
            address = company_address,
            )
        return JsonResponse(company.to_json(), status=201)

@csrf_exempt
def company_detail(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
        
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.description = data.get('description', company.description)
        company.city = data.get('city', company.city)
        company.address = data.get('address', company.address)
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted" : True})

def vacancy_by_company(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    
    vacancy_json = [vacancy.to_json() for vacancy in company.vacancies.all()]
    
    return JsonResponse(vacancy_json, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    
    return JsonResponse(vacancy.to_json())

def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)