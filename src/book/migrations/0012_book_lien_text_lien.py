# Generated by Django 5.1.2 on 2024-11-20 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("book", "0011_remove_text_image8_alter_book_image1_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="book",
            name="lien",
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name="text",
            name="lien",
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]