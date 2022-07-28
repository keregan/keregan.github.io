from .models import Market_item
from django.forms import ModelForm

class Market_item_form(ModelForm):
    class Meta:
        model = Market_item
        fields = ['quantity_in_stock']