from django.shortcuts import render
from .serializer import NewUserSerializer, RequestSerializer, DonorSerializer
from rest_framework import viewsets
from blooddonation.models import NewUser, Request, Donor



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






