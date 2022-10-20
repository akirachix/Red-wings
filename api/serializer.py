# from dataclasses import fields
from rest_framework import serializers
from blooddonation.models import NewUser, Request,Donor,Notification


# User Serializer
class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('name', 'blood_type', 'date','time')
        
        
class DonorSerializer(serializers.ModelSerializer):
     class Meta:
        model=Donor
        fields=("first_name","last_name","address","email","phone_number","age","blood_type","last_time_donated")

class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=NewUser
        fields= ("password","email")
        
        

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notification
        fields= ("date_created","time","title","message","recipient","origin")        