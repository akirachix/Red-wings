from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
# Create your views here.

@csrf_exempt
def index(request):
    if request.method == 'POST':
        session_id = request.POST.get('sessionId')
        service_code = request.POST.get('ShortCode')
        admission_number = request.POST.get('phone_number')
        text = request.POST.get('text')
        response = ""
        if text == "":
            response = "Welcome to wanadamu blood donation organisation"
            # response .= "1. My Account \n"
            response += "My Phone_Number"
        elif text == "":
            response = "END My phone_number is {0}".format(admission_number)
        return HttpResponse(response)
    return HttpResponse({"message": "this method requires a POST request"})


    