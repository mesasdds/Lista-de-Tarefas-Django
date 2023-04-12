from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def helloWorld(request):
    return HttpResponse('Hello World!')

def taskList(request):
    return render(request, 'tasks/list.html')

def yourName(request, name):
    return render(request, 'tasks/yourname.html', {'nome':name}) #sera util futuramente, por enqunato é meio bobo

