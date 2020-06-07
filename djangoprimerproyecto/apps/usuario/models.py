from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.db import models
# Create your models here.
#0 - osoario
#1 - administrador
#2 - super - admin
class UsuarioManager(BaseUserManager):
    def create_user(self,email,ci,nombre,apellido,password=None):
        if not ci:
            raise ValueError('inserte su numero de identificacion')

        usuario=self.model(
            ci=ci,
            email=self.normalize_email(email),
            nombre=nombre,
            apellido=apellido,

        )
        usuario.set_password(password)
        usuario.save()
        return usuario
    def create_superuser(self,ci,email,nombre,apellido,password):
        usuario = self.create_user(
            email,
            ci=ci,
            nombre=nombre,
            apellido=apellido,
            password=password
        )
        usuario.prioridad=1
        usuario.save()
        return usuario

class Usuario(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200, blank=False, null=False)
    apellido = models.CharField(max_length=200, blank=False, null=False)
    ci = models.IntegerField(null=False, unique=True,blank=False)
    password = models.CharField(max_length=200, blank=False, null=False)
    email = models.EmailField(max_length=200, unique=True, null=False, blank=False)
    estado = models.BooleanField(default=True)
    prioridad = models.IntegerField(blank=False,default=0, null=False)
    unidad = models.CharField(max_length=200, blank=False, null=False,default="Semillas")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=UsuarioManager()

    USERNAME_FIELD = 'ci'
    REQUIRED_FIELDS = ['nombre','apellido','email']
    def __str__(self):
        return "%s %s" % (self.nombre, self.apellido)
    
    def has_perm(self, perm,obj=None):
        return True 
    
    def has_module_perms(self, app_label):
        return True 

    @property
    def is_staff(self):
        return self.prioridad
