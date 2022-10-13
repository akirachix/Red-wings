from django.contrib import admin
from .models import Donors

# Register your models here.



class DonorsAdmin(admin.ModelAdmin):
    list_display =("first_name","last_name","age","email","location","last_time_donated","blood_type","phone_number")
    search_fields=("first_name","last_name","age","email","location","last_time_donated","blood_type","phone_number")
admin.site.register(Donors,DonorsAdmin)
