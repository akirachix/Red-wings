from django.shortcuts import render
from .serializer import RequestSerializer
from rest_framework import viewsets
from blooddonation.models import Request


# Create your views here.
class RequestViewset(viewsets.ModelViewSet):
    queryset=Request.objects.all()
    serializer_class=RequestSerializer
