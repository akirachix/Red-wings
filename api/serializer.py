from rest_framework import serializers
from blooddonation.models import Request
from blooddonation.models import Donor


# User Serializer
class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('name', 'blood_type', 'date','time')
        
        
class DonorSerializer(serializers.ModelSerializer):
     class Meta:
        model=Donor
        fields=("first_name","last_name","address","email","phone_number","age","blood_type","last_time_donated")

# Register Serializer
# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

#         return user