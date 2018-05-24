# Generated by Django 2.0.5 on 2018-05-19 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0002_auto_20180519_0144'),
    ]

    operations = [
        migrations.AddField(
            model_name='cityzip',
            name='country',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='location.Country'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='cityzip',
            name='name',
            field=models.CharField(default=2, max_length=100),
            preserve_default=False,
        ),
    ]