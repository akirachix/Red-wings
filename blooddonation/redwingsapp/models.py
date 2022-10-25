from datetime import datetime
from django.db import models

# Create your models here.


class Donors(models.Model):
    first_name=models.CharField(max_length=17,null=True)
    last_name=models.CharField(max_length=20,null=True)
    location=models.CharField(max_length=20)
    email=models.EmailField()
    phone_number=models.CharField(max_length=10,null=True)
    blood_type=models.CharField(max_length=5,null=True)
    age=models.CharField(max_length=20,null=True)
    last_time_donated = models.DateTimeField(max_length= 10,default=datetime.now,null=True)
