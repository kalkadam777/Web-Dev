from rest_framework import serializers

from models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()