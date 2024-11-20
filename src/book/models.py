import uuid
from django.db import models
from .s3field import S3FileField

class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    # image1 = models.ImageField(upload_to="media/", null=False, blank=False)  # Obligatoire
    # image2 = models.ImageField(upload_to="media/", null=True, blank=True)  # Optionnelle
    # image3 = models.ImageField(upload_to="media/", null=True, blank=True)  # Optionnelle
    # image4 = models.ImageField(upload_to="media/", null=True, blank=True)  # Optionnelle
    # image5 = models.ImageField(upload_to="media/", null=True, blank=True)  # Optionnelle
    image1 = S3FileField(upload_to="", blank=True, null=True)
    image2 = S3FileField(upload_to="", blank=True, null=True)
    image3 = S3FileField(upload_to="", blank=True, null=True)
    image4 = S3FileField(upload_to="", blank=True, null=True)
    image5 = S3FileField(upload_to="", blank=True, null=True)
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
    image1 = models.ImageField(upload_to="media/", null=False, blank=False)  # Obligatoire
    image1 = S3FileField(upload_to="", blank=True, null=True)
    image2 = S3FileField(upload_to="", blank=True, null=True)
    image3 = S3FileField(upload_to="", blank=True, null=True)
    image4 = S3FileField(upload_to="", blank=True, null=True)
    image5 = S3FileField(upload_to="", blank=True, null=True)
    image6 = S3FileField(upload_to="", blank=True, null=True)
    image7 = S3FileField(upload_to="", blank=True, null=True)    
    show = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Nouveau champ ajouté

    def __str__(self):
        return self.title
