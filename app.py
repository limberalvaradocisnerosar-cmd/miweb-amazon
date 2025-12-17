from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def home():
    """
    Ruta principal que renderiza la página de productos afiliados.
    Pasa una lista de 3 productos con toda su información.
    """
    products = [
        {
            "title": "Smart Plug Wi-Fi",
            "description": "Control your devices from your phone in seconds.",
            "category": "Smart Home / Gadgets",
            "image_url": url_for('static', filename='71aaOjmFYtL._AC_SX569_.jpg'),
            "affiliate_url": "https://amzn.to/4qf0UIj"
        },
        {
            "title": "360° Rotating Organizer",
            "description": "Instantly organize your kitchen, bathroom or desk.",
            "category": "Home Organization",
            "image_url": "https://via.placeholder.com/400x400?text=360+Rotating+Organizer",
            "affiliate_url": "https://amzn.to/4p3AfgR"
        },
        {
            "title": "Car Seat Gap Organizer",
            "description": "Stop losing items between your car seats.",
            "category": "Car Accessories",
            "image_url": "https://via.placeholder.com/400x400?text=Car+Seat+Gap+Organizer",
            "affiliate_url": "https://amzn.to/3N7rgO8"
        }
    ]

    return render_template("index.html", products=products)

if __name__ == "__main__":
    app.run(debug=True)
