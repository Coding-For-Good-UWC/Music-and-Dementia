from flask import Flask, request, jsonify
from flaskext.mysql import MySQL
import os
 
mysql = MySQL()
 
app = Flask(__name__)
 
username = os.environ.get('DB_USER')
db_pwd = os.environ.get('DB_PWD')
db_name = os.environ.get('DB_NAME')
db_host = os.environ.get('DB_HOST')
 
app.config['MYSQL_DATABASE_USER'] = username
app.config['MYSQL_DATABASE_PASSWORD'] = db_pwd
app.config['MYSQL_DATABASE_DB'] = db_name
app.config['MYSQL_DATABASE_HOST'] = db_host
 
 
mysql.init_app(app)
 
@app.route("/api/db", methods=['GET', 'POST'])
def db():
    if (request.method=="GET"):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * from "+db_name+".Users")
        conn.commit()
        data = cursor.fetchall()
        responses=[]
        for i in data:
            responses.append({
                "name": i[1],
                "location": i[2],
                "birth": i[3],
                "ethnicity": i[4],
                "language": i[5],
                "gender": i[6]
            })
        response = jsonify(responses)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    else:
        if (request.is_json):
            print(request.get_json())
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (name, birth) VALUES ('TEST', '2021-12-14')")
        conn.commit()
        response = jsonify({
            "status": "ok"
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
 