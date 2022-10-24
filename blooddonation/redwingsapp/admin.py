from django.contrib import admin

# Register your models here.
from .models import Donor,Notification, Request,NewUser
# Register your models here.
class DonorAdmin(admin.ModelAdmin):
    list_display =("first_name", "last_name", "email", "phone_number","address","age","blood_type","last_time_donated")
    search_fields =("first_name", "last_name", "email", "phone_number","address","age","blood_type",)
admin.site.register(Donor,DonorAdmin)


class NotificationAdmin(admin.ModelAdmin):
    list_display=("date_created", "message","recipient","time","origin","title")
    search_fields=("date_created","title", "message",)
admin.site.register(Notification, NotificationAdmin)

class RequestAdmin(admin.ModelAdmin):
    list_display=("first_name","location", "blood_type","number_of_prints","phone_number","action","time","date")
    search_fields=("first_name","location", "blood_type","number_of_prints","phone_number","action","time","date")
admin.site.register(Request, RequestAdmin)

class NewUserAdmin(admin.ModelAdmin):
    list_display=("email", "password")
    search_fields=("email", "password")
admin.site.register(NewUser, NewUserAdmin)