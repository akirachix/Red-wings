from django.urls import path,include
from rest_framework import routers
from .views import RequestViewset
from blooddonation.models import Notification, Request
from .views import DonorViewSet
from blooddonation.models import Donor
from .views import NewUserViewSet
from blooddonation.models import NewUser
from .views import NotificationViewSet
from blooddonation.models import Notification


router=routers.DefaultRouter()
router.register(r'Request',RequestViewset,basename=Request)
router.register(r"Donor",DonorViewSet,basename=Donor)
router.register(r"NewUser",NewUserViewSet,basename=NewUser)
router.register(r"Notification",NotificationViewSet,basename=Notification)



urlpatterns=[
    path("",include(router.urls)),
    path("",include(router.urls)),
    path("",include(router.urls)),

    

]
