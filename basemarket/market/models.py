from django.db import models
# from . import models

class Users(models.Model):
    user = models.CharField(max_length=30)
    password = models.CharField(max_length=50)
    money = models.IntegerField(default=0)
    auto_in = models.CharField(max_length=150)

class Market_item(models.Model):
    name = models.CharField(max_length=30)
    group = models.CharField(max_length=30)
    disc = models.CharField(max_length=100)
    price = models.IntegerField()
    quantity_in_stock = models.IntegerField()

# class market(models.Model):
#     name = models.CharField(max_length=30)
#     group = models.CharField(max_length=30)
#     disc = models.CharField(max_length=100)
#     quantity_in_my_stock = models.IntegerField()

# from django.db import models
# from django.db import connections
#
#
# class Users(models.Model):
#     my_field_name = models.CharField(max_length=20, help_text="Enter field documentation")
    # user_id = models.IntegerField(max_lenfth=10)
    # user_name = models.CharField(max_lenfth=100)
    # user_passord = models.CharField(max_lenfth=100)
    # user_money = models.IntegerField(max_lenfth=10)
    # class Meta:
    #     db.table="user"