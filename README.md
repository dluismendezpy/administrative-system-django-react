# Administrative System
This app was build using Django Rest Framework on the backend and ReactJS on the frontend side.

### Setup
#### -Step 1: clone repo
`https://github.com/dluismendezpy/administrative-system-django-react.git`
#### -Step 2:  enviroment
- Django


    cd administrative_system/
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate
	python manage.py createsuperuser
    python manage.py runserver

- React JS


	cd system_app_front/
	npm i

#### Step 3: Open browser
Go to `http://localhost:8000/admin` for admin

Got to `http://localhost:3000` for web frontend
