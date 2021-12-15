from flask import Flask, request, jsonify
from flaskext.mysql import MySQL

mysql = MySQL()

app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'AviAdi007*'
app.config['MYSQL_DATABASE_DB'] = 'madapp'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

@app.get("/api/read_db")
def rdb():
	conn = mysql.connect()
	cursor = conn.cursor()
	cursor.execute("SELECT * from users")
	conn.commit()
	data = cursor.fetchone()
	response = jsonify({
		"name": data[1],
		"birth": data[2],
	})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@app.get("/api/write_db")
def wdb():
	conn = mysql.connect()
	cursor = conn.cursor()
	cursor.execute("INSERT INTO users (name, birth) VALUES ('TEST', '2021-12-14')")
	conn.commit()
	response = jsonify({
		"status": "ok"
	})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
