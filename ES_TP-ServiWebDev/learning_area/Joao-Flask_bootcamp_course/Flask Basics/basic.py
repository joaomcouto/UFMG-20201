from flask import Flask
from flask import render_template

#Para template forms
from flask import request

#Para flask forms
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
app = Flask(__name__)

#Para flask forms fields
from flask import Flask, render_template, session, redirect, url_for, session
from flask_wtf import FlaskForm
from wtforms import (StringField, BooleanField, DateTimeField,
                     RadioField,SelectField,TextField,
                     TextAreaField,SubmitField)
from wtforms.validators import DataRequired

#Para flask flash alerts
from flask import Flask, render_template, flash, session, redirect, url_for



#Basic routing
@app.route('/teste')
def lala():
    return "<h1>Hello pupper!</h1>"

#Basic template
@app.route('/')
def index():
    return render_template('basic.html')

#Flask dynamic routing
@app.route('/puppy/<name>')
def pupper(name):
    return "<h1>This is a page for the pupper {}</h1>".format(name)

#Debugging
@app.route('/bug/<name>')
def bug(name):
    return "<h1>Vai dar ruim {}</h1>".format(name[100])

#Exemplo template variables e filtro e herança
@app.route('/basic_variables')
def temp():
    some_variable = "Joao"
    letters = list(some_variable)
    puppy_dic = {'pup_name' : 'sammy'}
    return render_template('basic_variables.html',my_variable = some_variable,letters=letters, dic=puppy_dic)
    #Tendo isso escrito agora é só escreve {{my_variable}} no html

#Exemplo Template control flow e tambem herança
@app.route('/template_control_flow')
def control_flow():
    mylist = [1,2,3,4,5]
    return render_template('template_control_flow.html',mylist = mylist)

#Template de uso do helper url_for
@app.route('/url_for_example')
def url_for_example():
    return render_template('url_for_example.html')

#Form
@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/thankyou')
def thank_you():
    first = request.args.get('first')
    last = request.args.get('last')
    return render_template('thankyou.html', first=first , last = last )

#404 customizado
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

#Flask forms
#Security key do Flask forms
app.config['SECRET_KEY'] ='mysecretkey'
class InfoForm(FlaskForm):
    breed = StringField("What breed are you??")
    submit = SubmitField("Submit")

#Allows us to pass form to the template
@app.route('/flask_form_example', methods = ['GET', 'POST'])
def Flask_form_example():
    breed = False
    form = InfoForm()
    if form.validate_on_submit():
        breed = form.breed.data
        form.breed.data = ''
    return render_template("flask_form_example.html", form=form, breed=breed)

########################Flask forms fields
class InfoForm2(FlaskForm):
    breed = StringField('What breed are you?',validators=[DataRequired()])
    neutered  = BooleanField("Have you been neutered?")
    mood = RadioField('Please choose your mood:', choices=[('mood_one','Happy'),('mood_two','Excited')])
    food_choice = SelectField(u'Pick Your Favorite Food:',
                          choices=[('chi', 'Chicken'), ('bf', 'Beef'),
                                   ('fish', 'Fish')])
    feedback = TextAreaField()
    submit = SubmitField('Submit')

@app.route('/flask_form_fields', methods = ['GET','POST'])
def flask_form_fields():

    # Create instance of the form.
    form = InfoForm2()
    # If the form is valid on submission (we'll talk about validation next)
    if form.validate_on_submit():
        # Grab the data from the breed on the form.

        #session eh tipo uma pasta temporaria com informacao da sessao do usuario
        #pode ser tratada como um dicionario
        session['breed'] = form.breed.data
        session['neutered'] = form.neutered.data
        session['mood'] = form.mood.data
        session['food'] = form.food_choice.data
        session['feedback'] = form.feedback.data

        return redirect(url_for("thank_you_form_fields"))

        #O programa vai vir aqui primeiro pq o form vai tar invalido
        #Eh por isso que o form vazio aparece em primeiro lugar
        #Ja com as formatacoes que especificamos no flask_form_fields html
    return render_template('flask_form_fields.html', form=form)

@app.route('/thankyou_form_fields')
def thank_you_form_fields():
    return render_template('thankyou_form_fields.html')
#############################################
###############################Flash messages

class SimpleForm(FlaskForm):
    # Just One Button
    submit = SubmitField('Click Me.')

@app.route('/flask_flash', methods=['GET', 'POST'])
def flaskflash():
    form = SimpleForm()

    if form.validate_on_submit():
        flash("You just clicked the button!")

        return redirect(url_for('flaskflash'))
    return render_template('flask_flash.html', form=form)





















class InfoForm3(FlaskForm):
    breed = StringField('What breed are you?',validators=[DataRequired()])
    submit = SubmitField('Submit')

    @app.route('/code_along', methods = ['GET','POST'])
    def code_along():

        # Create instance of the form.
        form = InfoForm3()
        # If the form is valid on submission (we'll talk about validation next)
        if form.validate_on_submit():
            # Grab the data from the breed on the form.

            #session eh tipo uma pasta temporaria com informacao da sessao do usuario
            #pode ser tratada como um dicionario
            session['breed'] = form.breed.data
            #flash("Obrigado! Sua raça é {}".format(session['breed']))
            flash(f"Obrigado! Sua raça é {session['breed']}")
            flash("Teste")

            return redirect(url_for("code_along"))

            #O programa vai vir aqui primeiro pq o form vai tar invalido
            #Eh por isso que o form vazio aparece em primeiro lugar
            #Ja com as formatacoes que especificamos no flask_form_fields html
        return render_template('code_along.html', form=form)





if __name__ == "__main__":
    app.run(debug=True)
