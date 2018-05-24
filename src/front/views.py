from django.views.generic import View
from django.shortcuts import render

class RenderFront(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html', {})