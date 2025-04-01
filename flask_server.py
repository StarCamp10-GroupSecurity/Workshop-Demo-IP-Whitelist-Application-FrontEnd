from flask import Flask, request, jsonify, render_template_string

app = Flask(__name__)


@app.route("/")
def home():
    return render_template_string(open("index.html").read())


@app.route("/submit", methods=["POST"])
def submit():
    user_input = request.form.get("user_input", "")
    impression = f"You seem like a very curious person! ({user_input})"
    return impression


if __name__ == "__main__":
    app.run(debug=True)
