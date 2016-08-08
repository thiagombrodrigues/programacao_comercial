# -*- coding: utf-8 -*-
from django import forms
from veiculos.models import *


class FormularioVeiculo(forms.ModelForm):
    """
    Formulario para o model Veiculo
    """

    class Meta:
        model = Veiculo
        exclude = []
