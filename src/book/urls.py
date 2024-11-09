from django.urls import path
from .views import texts, books, text_detail, book_detail

urlpatterns = [
    path('texts/', texts, name="texts"),
    path('books/', books, name="books"),

    path('book_detail/<uuid:id>/', book_detail, name="book_detail"),
    path('text_detail/<uuid:id>/', text_detail, name="text_detail"),

]
