from api.models import Company, Vacancy
from rest_framework.views import APIView
from rest_framework import status
from api.serializers import CompanySerializer2, VacancySerializer2, CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CompanyDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            company = Company.objects.get(id=pk)
            return company
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    
    def put(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer2(
            instance=company,
            data = request.data
        )
        if serializer.is_valid():
            serializer.save() # Update table...
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({"deleted" : True})
    
class VacancyByCompanyAPIView(APIView):
    def get_object(self, pk):
        try:
            company = Company.objects.get(id=pk)
            return company
        except Company.DoesNotExist:
            raise NotFound({'error': 'Company not found'})
    
    def get(self, request, pk=None):
        company = self.get_object(pk)
        vacancies = company.vacancies.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)   
    
class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class VacancyDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            vacancy = Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    
    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer2(
            instance=vacancy,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({"deleted" : True})
    
class VacancyTopTenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)