from django.db import models
# from datetime import datetime
from email.policy import default
# Create your models here.
class Donor(models.Model):
    first_name = models.CharField(max_length=15)
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


