from django.conf.urls import url
from veiculos import views

urlpatterns = [
    url(r'^$', views.VeiculosList.as_view(), name='listar-veiculos'),
    url(r'^novo/$', views.VeiculosNew.as_view(), name='novo-veiculo'),
    url(r'^(?P<pk>[0-9]+)/$', views.VeiculosEdit.as_view(), name='editar-veiculo'),
    url(r'^excluir/(?P<pk>[0-9]+)/$', views.VeiculosDelete.as_view(), name='deletar-veiculo'),
]
