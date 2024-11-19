"""
Django settings for adeline project.

Generated by 'django-admin startproject' using Django 5.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path
import os
import dj_database_url
import django_heroku

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure--9g9=43on)fwd5q+5om+obk&+g4*g69m6t)4np8xwk^_@dig%r"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["127.0.0.1", "adelinesite-651cf7f3ac50.herokuapp.com",
    "www.adelinesite-651cf7f3ac50.herokuapp.com",
    "adelinepesic.fr",
    "www.adelinepesic.fr",
    "adelinepesic.com",
    "www.adelinepesic.com" ]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    'storages',
    "django.contrib.messages",
    'django.contrib.staticfiles',
    'django.contrib.sites',

    'constance.backends.database',
    'constance',
    'widget_tweaks',

    'book',
    'super',
]


MIDDLEWARE = [
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "adeline.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "adeline.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'adeline_db',
        'USER': 'postgres',
        'PASSWORD': ':)Solenops1s<$o',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'fr'

TIME_ZONE = 'Europe/Paris'

USE_I18N = True

USE_TZ = True



# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = "static/"
STATICFILES_DIRS = [BASE_DIR / 'static']


# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
LOCALE_PATHS = (
    BASE_DIR / 'locale',
)






SITE_ID = 1




SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True


CONSTANCE_BACKEND = 'constance.backends.database.DatabaseBackend'

CONSTANCE_CONFIG = {
    #'BIOGRAPHY': ('biography', 'text Biography'),
}



# =============================================================================

# scalway storage

# =============================================================================



if os.environ.get('ENV') == "PRODUCTION":
    db_from_env = dj_database_url.config(conn_max_age=600)
    DATABASES['default'].update(db_from_env)
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

STATIC_ROOT = BASE_DIR / 'staticfiles'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / "media"

# DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

# AWS_S3_ENDPOINT_URL = "https://adeline-site-media.s3.fr-par.scw.cloud" # os.environ.get('CLOUDCUBE_URL')

# AWS_ACCESS_KEY_ID = "SCW8QZSC6YW5GTQN3Y6D" # os.environ.get('CLOUDCUBE_ACCESS_KEY_ID')

# AWS_SECRET_ACCESS_KEY = "09d24409-ceb6-4781-8486-e55557ea9b02" #os.environ.get('CLOUDCUBE_SECRET_ACCESS_KEY')

# AWS_STORAGE_BUCKET_NAME = "adeline-site-media"

# AWS_S3_REGION_NAME = 'fr-par'
# AWS_S3_SIGNATURE_VERSION = 's3v4'
# AWS_S3_FILE_OVERWRITE = False
# MEDIA_URL = f'https://{AWS_STORAGE_BUCKET_NAME}.s3.{AWS_S3_REGION_NAME}.scw.cloud/'
# SCW_ACCESS_KEY=SCW8QZSC6YW5GTQN3Y6D
# SCW_SECRET_KEY=09d24409-ceb6-4781-8486-e55557ea9b02
# SCW_DEFAULT_ORGANIZATION_ID=644f7ab9-a8bf-4974-b843-c584c691aecd
# SCW_DEFAULT_PROJECT_ID=644f7ab9-a8bf-4974-b843-c584c691aecd
#
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


cloudcube_base_url = os.environ.get('CLOUDCUBE_URL')


AWS_S3_ENDPOINT_URL = cloudcube_base_url

AWS_ACCESS_KEY_ID = os.environ.get('CLOUDCUBE_ACCESS_KEY_ID')

AWS_SECRET_ACCESS_KEY = os.environ.get('CLOUDCUBE_SECRET_ACCESS_KEY')

AWS_STORAGE_BUCKET_NAME = "adeline-site-media"

AWS_S3_REGION_NAME = 'fr-par'
AWS_S3_SIGNATURE_VERSION = 's3v4'
AWS_S3_FILE_OVERWRITE = False

django_heroku.settings(locals())
