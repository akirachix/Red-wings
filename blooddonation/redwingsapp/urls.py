
from distutils.command.upload import upload
from django.urls import path
from django.conf.urls import include
import imp
# from xml.etree.ElementInclude import include
from django.contrib import admin
# from django.urls import path
from django.urls import path
from redwingsapp.views import contact_upload
# from django.urls import path,include

urlspatterns=[
    path('admin/',admin.site.urls),
    # path('upload_csv/', include('redwingsapp.urls')),
    # path('upload_csv/', contact_upload, name="contact_upload"),
]