from django.contrib import admin
from .models import Donor,Notification

# Register your models here.
class DonorAdmin(admin.ModelAdmin):
    list_display =("first_name", "last_name", "email", "phone_number","address","age","blood_type","last_time_donated")
    search_fields =("first_name", "last_name", "email", "phone_number","address","age","blood_type",)
admin.site.register(Donor,DonorAdmin)


class NotificationAdmin(admin.ModelAdmin):
    list_display=("date_created", "message","recipient","time","origin","title")
    search_fields=("date_created","title", "message",)
admin.site.register(Notification, NotificationAdmin)