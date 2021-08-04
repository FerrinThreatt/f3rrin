from flask import Flask, redirect, url_for, render_template, send_from_directory
import os

app = Flask(__name__)

picFolder = os.path.join('static','images')

app.config['UPLOAD_FOLDER'] = picFolder

@app.route("/")
def home():
    image_names = os.path.join(app.config['UPLOAD_FOLDER'],"ferrinDev.JPG")
    return render_template("index.html",user_image = image_names)

@app.route("/index.html")
def home_page():
    image_names = os.path.join(app.config['UPLOAD_FOLDER'],"ferrinDev.JPG")
    return render_template("index.html",user_image = image_names)

@app.route("/enterPage.html")
def enterPage():
    return render_template("enterPage.html")



# @app.route("/script")
# def scriptFunc():
#     return render_template("script.js")

# @app.route('/script/<path:filename>')
# def serve_static(filename):
#     root_dir = os.path.dirname(os.getcwd())
#     return send_from_directory(os.path.join(root_dir, 'static'), filename)

# # @app.route('/static/script.js')
# # def send_js():
# #     root_dir = os.getcwd()
# #     return send_from_directory(os.path.join(root_dir, 'static'), 'script.js')
#
# @app.route('/static/<path:path>')
# def send_js(path):
#     return send_from_directory('static', path)

if __name__ == "__main__":
  app.run()
