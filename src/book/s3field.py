from django.db.models.fields.files import FileField, FieldFile
import boto3
import uuid
import os


# Configuration S3
AWS_ACCESS_KEY_ID = "SCWC8FM08VE5V04MW3JP"
AWS_SECRET_ACCESS_KEY = "70603b30-f9fd-4022-af48-f8124d171c22"
AWS_STORAGE_BUCKET_NAME = "adeline-site-media"
AWS_S3_ENDPOINT_URL = "https://s3.fr-par.scw.cloud"
region_name = "fr-par"


class S3FieldFile(FieldFile):
    def save(self, name, content, save=True):
        # Initialiser S3
        session = boto3.session.Session(
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
            region_name=region_name
        )
        s3 = session.client('s3', endpoint_url=AWS_S3_ENDPOINT_URL)

        # Générer un nom unique pour le fichier
        file_extension = os.path.splitext(name)[1]
        unique_filename = f"images/{uuid.uuid4().hex}{file_extension}"

        # Upload sur S3
        s3.upload_fileobj(
            content,
            AWS_STORAGE_BUCKET_NAME,
            unique_filename,
            ExtraArgs={"ContentType": content.content_type, "ACL": "public-read"},
        )

        # Construire l'URL publique
        self.name = f"{unique_filename}"

        # Ne rien sauvegarder localement
        if save:
            super().save(name, content, save)

class S3FileField(FileField):
    attr_class = S3FieldFile
