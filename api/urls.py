from django.urls import path,include
from rest_framework import routers
from .views import RequestViewset
from blooddonation.models import Request
from .views import DonorViewSet
from blooddonation.models import Donor







router=routers.DefaultRouter()
router.register(r'Request',RequestViewset,basename=Request)
router=routers.DefaultRouter()
router.register(r"Donor",DonorViewSet,basename=Donor)


urlpatterns=[
    path("",include(router.urls)),
    path("",include(router.urls)),

]
