from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('core/login.html')

@app.route('/login')
def login():
    return render_template('core/login.html')

@app.route('/home')
def home():
    return render_template('pages/home.html', heading='Home')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9901)
