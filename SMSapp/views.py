from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
# Create your views here.

@csrf_exempt
def index(request):
    if request.method == 'POST':
        session_id = request.POST.get('sessionId')
        service_code = request.POST.get('ShortCode')
        admission_number = request.POST.get('phoneNumber')
        text = request.POST.get('text')
        response = ""
        if text == "":
            response = "hello donor, are you available to donate at hospital B"
            # response .= "1. My Account \n"
            response += "PhoneNumber"
        elif text == "":
            response = "END My Admission number is {0}".format(phone_number)
        return HttpResponse(response)
    return HttpResponse({"message": "this method requires a POST request"})








