from django.shortcuts import render

# Create your views here.
def home(request):
    """view for homepage"""
    return render(request, 'super/home.html')
