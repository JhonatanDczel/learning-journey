from django import forms


class CreateNewTask(forms.Form):
  title = forms.CharField(label="TItulo de tarea",
                         max_length=200,
                         required=True)
  description = forms.CharField(widget=forms.Textarea, label="Descripcion de tarea", required=True)

class CreateNewProject(forms.Form):
  name = forms.CharField(label="Nombre de proyecto",
                         max_length=200,
                         required=True)
  