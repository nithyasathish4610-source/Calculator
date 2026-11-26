from django.shortcuts import render

def home(request):
    return render(request, 'calculator_app/index.html')