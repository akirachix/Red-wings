from django.shortcuts import render
from .serializer import RequestSerializer
from rest_framework import viewsets
from blooddonation.models import Request
from .serializer import DonorSerializer
from blooddonation.models import Donor


# Create your views here.
class RequestViewset(viewsets.ModelViewSet):
    queryset=Request.objects.all()
    serializer_class=RequestSerializer
    
class DonorViewSet(viewsets.ModelViewSet):
    queryset=Donor.objects.all()
    serializer_class=DonorSerializer








