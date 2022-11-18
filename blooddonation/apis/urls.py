from django.urls import path,include
from rest_framework import routers
from .views import RequestViewset,NotificationViewSet,NewUserViewSet,DonorViewSet
from redwingsapp.models import Notification, Request,Donor,NewUser


router=routers.DefaultRouter()
router.register(r'Request',RequestViewset,basename=Request)
router.register(r"Donor",DonorViewSet,basename=Donor)
router.register(r"NewUser",NewUserViewSet,basename=NewUser)
router.register(r"Notification",NotificationViewSet,basename=Notification)
# router.register(r"Csv",CsvViewSet,basename=Csv)
urlpatterns=[
    path("",include(router.urls)),
    
 
]