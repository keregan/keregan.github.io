from django.shortcuts import render
from django.http import HttpResponse
from django import forms
from .models import Market_item

# def user_info(request):
#     return render(request, 'market/index.html',)

# def main_index(request):
#     users_info=Users.objects.all()
#     # users_info = "q"
#     return render(request, 'market/index.html', ({users_info}:users_info))

def main_index(request):
    item_info=Market_item.objects.all()
    return render(request, 'market/base.html', {'item_info':item_info})

def create(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()