from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.hashers import make_password
from django.db import models

#0 - osoario
#1 - administrador
#2 - super - admin
TIPO_USUARIO = [
    (0, 'Usuario'),
    (1, 'Administrador'),
    (2, 'Super Administrador'),
]
ESTADO_USUARIO = [
    (0, 'De Baja'),
    (1, 'Activo'),
]

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
    nombre = models.CharField("Nombres", max_length=200, blank=False, null=False)
    apellido = models.CharField("Apellidos", max_length=200, blank=False, null=False)
    ci = models.IntegerField("Carnet de Identidad", null=False, unique=True,blank=False)
    password = models.CharField("Contraseña", max_length=200, blank=False, null=False)
    email = models.EmailField("Correo electronico", max_length=200, unique=True, null=False, blank=False)
    estado = models.IntegerField("Estado", default=True, choices=ESTADO_USUARIO)
    prioridad = models.IntegerField("Tipo de Usuario", blank=False,default=0, null=False, choices=TIPO_USUARIO)
    unidad = models.CharField("Unidad", max_length=200, blank=False, null=False,default="Semillas")
    last_login = models.DateTimeField('last login', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=UsuarioManager()

    USERNAME_FIELD = 'ci'
    REQUIRED_FIELDS = ['nombre','apellido','email']
    def __str__(self):
        return str(self.id)
    
    def has_perm(self, perm,obj=None):
        return True 
    
    def has_module_perms(self, app_label):
        return True 

    @property
    def is_staff(self):
        return self.prioridad
    
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Usuario, self).save(*args, **kwargs)
