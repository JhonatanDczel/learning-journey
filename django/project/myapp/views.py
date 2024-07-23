from django.http import HttpResponse, JsonResponse
from .models import Project, Task
from django.shortcuts import get_object_or_404, render, redirect
from .forms import CreateNewTask, CreateNewProject


# Create your views here.
def hello(request, username):
  print(username)
  return HttpResponse(f"Hello, {username}!")


def index(request):
  title = "Welcome to Django Project!"
  return render(request, 'index.html', {'title': title})


def about(request):
  return render(request, 'about.html')


def projects(request):
  projects = Project.objects.values()
  return render(request, 'projects.html', {'projects': projects})


def tasks(request):
  tasks = Task.objects.all()
  return render(request, 'tasks.html', {'tasks': tasks})

def create_task(request):
  if(request.method == 'GET'):
    return render(request, 'create_task.html', {'form' : CreateNewTask() })
  Task.objects.create(title=request.POST['title'], description=request.POST['description'], project_id=1)
  return redirect('tasks')

def create_project(request):
  if(request.method == 'GET'):
    return render(request, 'create_project.html', {'form' : CreateNewProject() })
  Project.objects.create(name=request.POST['name'])
  return redirect('projects')
