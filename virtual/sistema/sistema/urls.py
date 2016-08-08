from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^veiculos/', include('veiculos.urls')),
    url(r'^admin/', admin.site.urls),
]
