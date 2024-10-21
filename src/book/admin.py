
from django.contrib import admin
from .models import Book, Text

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'description')
    search_fields = ('title', 'type')
    list_filter = ('type',)
    filter_horizontal = ('text',)  # ManyToManyField pour Text

@admin.register(Text)
class TextAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    search_fields = ('title',)
