from multiprocessing import context
from os import confstr_names
from pyexpat.errors import messages
from redwingsapp import templates
from venv import create
# import pandas as pd
from django.shortcuts import render
# from dateutil.parser import parse
# Create your views here.easy on me adele
import csv, io
from django.contrib.auth.decorators import permission_required
from redwingsapp.models import Donor
@permission_required('admin.can_add_log_entry')
def contact_upload(request):
    templates="contact_upload.html"
    prompt={
        'order':'order of the CSV should be first_name, last_name, address,email, phone_number,age,blood_type,last_time_donated'
    }
    # GET request returns the value of the data with the specified key.
    if request.method== "GET":
        return render(request,templates,prompt)
    csv_file=request.FILES['file']
     # let's check if it is a csv file
    if not csv_file.name.endswith('.csv'):
        messages.error(request,'This is not a csv file')
    data_set=csv_file.read().decode('UTF-8')
    # setup a stream which is when we loop through each line we are able to handle a data in a stream
    io_string=io.StringIO(data_set)
    next(io_string)
    contact_upload= csv.reader(io_string,delimiter=',', quotechar="|")
    print(contact_upload)
    for first_name, last_name, address,email, phone_number,age,blood_type,last_time_donated, *__ in contact_upload:
        dt = parse(last_time_donated)
        # dts = parse(last_time_donated)
        created=Donor(
        first_name=first_name,
        last_name=last_name,
        address=address,
        email=email,
        phone_number=phone_number,
        age=age,
        blood_type=blood_type,
        last_time_donated=dt
        )
        print(created)
        created.save()
        context={}
        return render(request,templates,context)











# from http.client import HTTPResponse
# from django.shortcuts import render
# # Create your views here.
# from django.shortcuts import render
# import csv,io
# import csv

# # from django.shortcuts import render
# from rest_framework import generics
# import io, csv, pandas as pd
# from rest_framework.response import Response
# # remember to import the File model


# from pyexpat.errors import messages
# from django.shortcuts import render
# # from dateutil.parser import parse
# import csv, io
# from django.contrib.auth.decorators import permission_required
# from redwingsapp.models import Donor
# # from multiprocessing import context
# from os import confstr_names
# from pyexpat.errors import messages
# # from re import template
# # from venv import create
# from django.shortcuts import render
# # from dateutil.parser import parse
# # from redwingsapp.models import CsvSerializer
# # from blooddonation.redwingsapp.models import DonorDetails
# @permission_required('admin.can_add_log_entry')
# def contact_upload(request):
#     templates="contact_upload.html"
#     prompt={
#         'order':'Order of the CSV should be first_name, last_name, address,email, phone_number,age,blood_type,last_time_donated'
#     }
#     # GET request returns the value of the data with the specified key.
#     if request.method== "GET":
#         return render(request,templates,prompt)
#     csv_file=request.FILES['file']
#      # let's check if it is a csv file
#     if not csv_file.name.endswith('.csv'):
#         messages.error(request,'This is not a csv file')
#     data_set=csv_file.read().decode('UTF-8')
#     # setup a stream which is when we loop through each line we are able to handle a data in a stream
#     io_string=io.StringIO(data_set)
#     next(io_string)
#     for column in csv.reader(io_string,delimiter=',', quotechar="|"):
#         _,created=Donor.objects.update_or_create(
#         first_name=column[0],
#         last_name=column[1],
#         address=column[2],
#         email=column[3],
#         phone_number=column[4],
#         age=column[5],
#         blood_type=column[6],
#         last_time_donated=column[7]
#         )
     
#         context={}
#         return render(request,templates,context)

           

