# Generated by Django 5.0.4 on 2024-04-09 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancy',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='name',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(null=True),
        ),
    ]
