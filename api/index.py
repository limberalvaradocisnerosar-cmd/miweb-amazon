import sys
import os

# Agregar el directorio raíz al path para importar app
# En Vercel, el directorio de trabajo puede ser diferente
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)

# Agregar el directorio padre al path
if parent_dir not in sys.path:
    sys.path.insert(0, parent_dir)

# Importar la app Flask
try:
    from app import app
except ImportError as e:
    # Debug: imprimir el error si hay problemas de importación
    import traceback
    print(f"Error importing app: {e}")
    print(f"Current dir: {current_dir}")
    print(f"Parent dir: {parent_dir}")
    print(f"Python path: {sys.path}")
    traceback.print_exc()
    raise

# Vercel serverless function handler
# Para Flask, Vercel necesita que exportemos la app directamente
# El runtime de Python de Vercel maneja la conversión WSGI automáticamente

