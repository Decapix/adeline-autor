from django.shortcuts import render
from book.models import Book, Text

# Create your views here.
def home(request):
    """view for homepage"""
    texts = Text.objects.filter(show=True).order_by('-created_at')[:4]
    books = Book.objects.filter(show=True).order_by('-created_at')[:2]
    return render(request, 'super/home.html', {"books": books, "texts": texts})



def biography(request):
    """view for biography"""
    return render(request, 'super/biography.html')
