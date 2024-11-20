from .models import Text, Book
from django.shortcuts import render, get_object_or_404
# Create your views here.

def texts(request):
    """view for texts"""
    texts = Text.objects.filter(show=True)
    return render(request, 'book/texts.html', {"texts": texts})

def books(request):
    """view for Books"""
    books = Book.objects.filter(show=True)
    return render(request, 'book/books.html', {"books": books})

def text_detail(request, id):
    text = get_object_or_404(Text, id=id)
    images = [text.image1, text.image2, text.image3, text.image4,
                text.image5, text.image6, text.image7, text.image8]
    images = [img for img in images if img]  # Exclure les images nulles
    main_image = images[0] if images else None
    return render(request, 'book/text-detail.html', {'text': text, 'images': images, 'main_image': main_image})

def book_detail(request, id):
    book = get_object_or_404(Book, id=id)
    images = [book.image1, book.image2, book.image3, book.image4,
                book.image5, book.image6, book.image7, book.image8]
    images = [img for img in images if img]  # Exclure les images nulles
    main_image = images[0] if images else None
    return render(request, 'book/book-detail.html', {"book": book,  'images': images, 'main_image': main_image})
