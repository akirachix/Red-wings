from argparse import Action
import numbers
from unittest.util import _MAX_LENGTH
from django.db import models
from email.policy import default
from datetime import datetime

# Create your models here.

class Donor(models.Model):
    name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=15)
    address = models.TextField()
    email = models.EmailField()
    phone_number = models.CharField(max_length=10)
    age = models.IntegerField()
    blood_type = models.CharField(max_length=15)
    last_time_donated = models.DateField()

class Notification(models.Model):
    date_created=models.DateField()
    time=models.TimeField()
    title=models.CharField(max_length=30)
    message=models.CharField(max_length=250)
    recipient=models.CharField(max_length=40)
    origin=models.ForeignKey(Donor,on_delete=models.CASCADE,null=True)

class Request(models.Model):
    first_name=models.CharField(max_length=15, null=True)
    location=models.CharField(max_length=20)
    blood_type=models.CharField(max_length=10)
    number_of_prints=models.PositiveSmallIntegerField()
    phone_number=models.CharField(max_length=10)
    action=models.CharField(max_length=10,null=True)
    date=models.DateTimeField(null=True, blank=True,default=datetime.now)
    time=models.TimeField()

class NewUser(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=8)



