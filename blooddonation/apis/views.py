from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .serializers import NewUserSerializer, RequestSerializer, DonorSerializer,NotificationSerializer
from rest_framework import viewsets
from redwingsapp.models import NewUser, Notification, Request, Donor
# Create your views here.
class RequestViewset(viewsets.ModelViewSet):
    queryset=Request.objects.all()
    serializer_class=RequestSerializer

class DonorViewSet(viewsets.ModelViewSet):
    queryset=Donor.objects.all()
    serializer_class=DonorSerializer

class NewUserViewSet(viewsets.ModelViewSet):
    queryset=NewUser.objects.all()
    serializer_class=NewUserSerializer
    
class NotificationViewSet(viewsets.ModelViewSet):
    queryset=Notification.objects.all()
    serializer_class=NotificationSerializer