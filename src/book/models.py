import uuid
from django.db import models

class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image1 = models.ImageField(upload_to="media", null=False, blank=False)  # Obligatoire
    image2 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image3 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image4 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image5 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    type = models.CharField(max_length=50, null=True, blank=True)
    text = models.ManyToManyField('Text', related_name='books', null=True, blank=True)
    show = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Nouveau champ ajouté

    def __str__(self):
        return self.title

class Text(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image1 = models.ImageField(upload_to="media", null=False, blank=False)  # Obligatoire
    image2 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image3 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image4 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image5 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image6 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image7 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    image8 = models.ImageField(upload_to="media", null=True, blank=True)  # Optionnelle
    show = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Nouveau champ ajouté

    def __str__(self):
        return self.title
