from django.urls import path,include
from rest_framework import routers
from .views import RequestViewset
from blooddonation.models import Request






router=routers.DefaultRouter()
router.register(r'Request',RequestViewset,basename=Request)

urlpatterns=[
    path("",include(router.urls)),
]
