from django.contrib import admin
from .models import Donor,Notification, Request,Statistic

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
    list_display=("name", "blood_type","time","date")
    search_fields=("name", "blood_type","recipient","time","date")
admin.site.register(Request, RequestAdmin)

class StatisticAdmin(admin.ModelAdmin):
    list_display=("year", "donors")
    search_fields=("year", "donors")
admin.site.register(Statistic, StatisticAdmin)