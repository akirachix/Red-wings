from django.db import models
from email.policy import default

# Create your models here.

class Donor(models.Model):
    first_name = models.CharField(max_length=25)
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
    name=models.CharField(max_length=15)
    blood_type=models.CharField(max_length=10)
    date=models.DateField()
    time=models.TimeField()

class Statistic(models.Model):
    year=models.IntegerField()
    donors=models.IntegerField()




