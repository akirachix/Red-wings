# from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import permissions

# Create your views here.
# from django.shortcuts import render
from .serializers import NewUserSerializer, RequestSerializer, DonorSerializer,NotificationSerializer
from rest_framework import viewsets
from redwingsapp.models import Donor, NewUser, Notification, Request
# Create your views here.
class RequestViewset(viewsets.ModelViewSet):
    queryset=Request.objects.all()
    serializer_class=RequestSerializer

class DonorViewSet(viewsets.ModelViewSet):
    queryset=Donor.objects.all()
    serializer_class=DonorSerializer

    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the todo items for given requested user
        '''
        donors = Donor.objects.filter(user = request.user.id)
        serializer = DonorSerializer(donors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        data = {
            'task': request.data.post('task'), 
            'completed': request.data.post('completed'), 
            'user': request.user.id
        }

    def delete(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        data = {
            # 'task': request.data('task'), 
            # 'completed': request.data.delete('completed'), 
            'user': request.user.id
        }    

        serializer = DonorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NewUserViewSet(viewsets.ModelViewSet):
    queryset=NewUser.objects.all()
    serializer_class=NewUserSerializer
    
class NotificationViewSet(viewsets.ModelViewSet):
    queryset=Notification.objects.all()
    serializer_class=NotificationSerializer
