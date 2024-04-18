from rest_framework import serializers

from .models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    
    def create(self, validated_data):
        instance = Company.objects.create(
            name = validated_data.get('name'),
            description = validated_data.get('description'),
            city = validated_data.get('city'),
            address = validated_data.get('address')
        )
        return instance
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.save()
        return instance
    
class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')
        
class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer()
    
    def create(self, validated_data):
        instance = Vacancy.objects.create(
            name = validated_data.get('name'),
            description = validated_data.get('description'),
            salary = validated_data.get('salary'),
            company = validated_data.get('company')
        )
        return instance
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.salary = validated_data.get('salary')
        instance.company = validated_data.get('company')
        instance.save()
        return instance
    
    
class VacancySerializer2(serializers.ModelSerializer):
    # vacancies = VacancySerializer(many=True, read_only=True)
    company = serializers.CharField(source='company.name')
    class Meta:
        model = Vacancy
        fields = '__all__'