from flask import Flask, render_template, request, jsonify
from flask.helpers import send_from_directory
import smtplib
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import os

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)

load_dotenv()

MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")


@app.route("/objednat", methods=["POST"])
@cross_origin()
def objednat():
    body = request.get_json()

    first_name = body.get('first_name')
    last_name = body.get('last_name')
    starting_date = body.get('starting_date')
    course_name = body.get('course_name')

    email = body.get('email')


    message = "Dobry den, \n\n potvrzujeme, že proběhla uspešná obednávka kurzu " + course_name + ", ktery započne dne " + starting_date + ". \n\n Dekujeme za vaši duveru! \n\n S pozdravem, \n\n Economic Face s.r.o."

    message_admin = "Zákaznik " + first_name + " " + last_name + " si objednal kurz " + course_name + ", který započne dne" + starting_date + " z emailove adresy " + email

    message = message.encode('utf8')

    message_admin = message_admin.encode('utf8')


    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login("ec.face.jihlava@gmail.com", MAIL_PASSWORD)
    server.sendmail("daniel.olt2019@gmail.com", email, message)
    server.sendmail("ec.face.jihlava@gmail.com", "ec.face.jihlava@gmail.com", message_admin)

    return jsonify({
        'success':True
    })






@app.route("/text2", methods=["GET"])
@cross_origin()
def text2():

    singleCardContent = [

        {
            "id": 1,
            "url": "/kurzy/",
            "nadpis": "Mzdové účetnictví",
            "foto": "mzdove.jpg",
            "cena": "10 990 Kč",
            "trvani": "80 hodin",
            "obsah": ["daň z příjmu",
                      "daň z příjmu právnických osob",
                      "daň z přidané hodnoty",
                      "silniční daň",
                      "daň z převodu nemovitostí",
                      "spotřební daně",
                      ]
        },
        {
            "id": 2,
            "url": "/kurzy/",
            "nadpis": "Daňová evidence",
            "foto": "dane.jpg",
            "cena": "5 990 Kč",
            "trvani": "40 hodin",
            "obsah": ["daň z příjmu fyzických osob",
                      "daň z příjmu právnických osob",
                      "daň z přidané hodnoty",
                      "silniční daň",
                      "daň z nemovitosti",
                      "daň dědická",
                      "daň darovací",
                      "daň z převodu nemovitostí",
                      "spotřební daně",
                      "daňový řád", ]
        },
        {
            "id": 3,
            "url": "/kurzy/",
            "nadpis": "Účetnictví a daňová evidence",
            "foto": "ucet_dan.jpg",
            "cena": "13 990 Kč",
            "trvani": "130 hodin",
            "obsah": ["daň z příjmu fyzických osob",
                      "daň z příjmu právnických osob",
                      "daň z přidané hodnoty",
                      "silniční daň",
                      "daň z nemovitosti",
                      "daň dědická",
                      "daň darovací",
                      "daň z převodu nemovitostí",
                      "spotřební daně",
                      "daňový řád", ]
        },
        {
            "id": 4,
            "url": "/kurzy/",
            "nadpis": "Účetnictví a daňová evidence s využitím výpočetní techniky",
            "foto": "ucet_tech.jpg",
            "cena": "14 990 Kč",
            "trvani": "160 hodin",
            "obsah": ["daň z příjmu fyzických osob",
                      "daň z příjmu právnických osob",
                      "daň z přidané hodnoty",
                      "silniční daň",
                      "daň z nemovitosti",
                      "daň dědická",
                      "daň darovací",
                      "daň z převodu nemovitostí",
                      "spotřební daně",
                      "daňový řád", ]
        },
    ]




    return jsonify({
        'data': singleCardContent
    })





@app.route("/ucetnictvi", methods=["GET"])
@cross_origin()
def ucetnictvi():

    ucetnictviContent = [
        {
            "id": 1,
            "url": "/ucetnictvi/",
            "nadpis": "ÚČETNICTVÍ",
            "foto": "mzdove.jpg",
            "cena": "",
            "trvani": "",
            "obsah":[
                    "Vedení deníku a hlavních knih",
                    "Evidence majetku",
                    "Roční uzávěrka",
                    "Nemusíte platit upgrade účetního a mzdového softwaru",
                    "Vyhotovování přehledů, sestav, tabulek"
                      ]
        },
        {
            "id": 2,
            "url": "/ucetnictvi/",
            "nadpis": "DAŇOVÁ EVIDENCE",
            "foto": "dane.jpg",
            "cena": "",
            "trvani": "",
            "obsah": ["Vedení peněžního deníku",
                      "Vedení knih pohledávek a závazků",
                      "Evidence majetku",
                      "Evidence DPH",
                      "Roční uzávěrka",
                      "Vyhotovování přehledů, sestav a tabulek",
                    ]
        },
        {
            "id": 3,
            "url": "/ucetnictvi/",
            "nadpis": "MZDOVÁ A PERSONÁLNÍ AGENDA",
            "foto": "ucet_dan.jpg",
            "cena": "",
            "trvani": "",
            "obsah": ["Komplexní vedení mzdové agendy",
                      "Zpracování pracovní smlouvy, mzdového výměru",
                      "Přihlášení nebo odhlášení zaměstnance na OSSZ a na zdravotní pojišťovně",
                      "Vypracování přehledů pro OSSZ a zdravotní pojišťovnu",
                      "Vedení mzdových a evidenčních listů",
                      "Zpracování dohod o provedení práce a dohod o pracovní činnosti",
                      "Zpracování ročního zúčtování daňových záloh zaměstnanců, zpracování přehledů pro finanční úřad",
                      "Evidence ve vztahu k Úřadu práce",
                      "Příprava podkladů pro kontroly",
                      ]
        },
        {
            "id": 4,
            "url": "/ucetnictvi/",
            "nadpis": "EKONOMICKÉ A ÚČETNÍ PORADENSTVÍ",
            "foto": "ucet_tech.jpg",
            "cena": "",
            "trvani": "",
            "obsah": ["Firemní strategie, cíle, úkoly, plán",
                      "Řízení financí – cashflow, controlling",
                      "Zpracování podnikatelských záměrů",
                      "Finanční analýza",
                      "Zpracování žádosti o úvěr",
                      "Zpracování vnitropodnikových směrnic, řízení interních procesů firmy",
                      "Pomoc při zakládání firem a při změně právní formy podnikání",
                     ]
        },
        {
            "id": 5,
            "url": "/ucetnictvi/",
            "nadpis": "DALŠÍ SLUŽBY",
            "foto": "ucet_tech.jpg",
            "cena": "",
            "trvani": "",
            "obsah": ["Zpracování a podání daňových přiznání, a to DPH, daň z příjmu fyzických i právnických osob, silniční daň, daň z nemovitosti",
                      "Optimalizace daňové povinnosti",
                      "Zpracování a podání přehledů na OSSZ a zdravotní pojišťovnu",
                      "Daňové a účetní konzultace, poradenská činnost pro občany v oblasti daní",
                      "Spolupráce s auditory a daňovými poradci",
                      "Konzultace s právníkem, zajištění právních služeb",
                      "Zastupování na úřadech",
                      "Zpracování přehledů pro banky, statistický úřad, aj."
                      ]
        },
    ]


    return jsonify({
        'data':ucetnictviContent
    })



@app.route("/vyukove", methods=["GET"])
@cross_origin()
def vyukove():

    singleCardContent = [

        {
            "id": 1,
            "url": "/vyukove/",
            "nadpis": "STŘEDOŠKOLÁK",
            "foto": "stredoskolak.jpg",
            "cena": "",
            "trvani": "",
            "popis":[
                    '''
                      Studujete na střední škole a nedaří se vám dosahovat takových 
                      úspěchů, jaké jste si představovali?
                    ''',
                    '''
                      Věnujete neúměrně mnoho nebo naopak málo času školní přípravě?
                    ''',
                    '''
                        Blíží se vám neúprosně maturita z účetnictví? 
                    ''',
                    '''
                        Nabízíme intenzivní kurz doučování z účetnictví pro praktickou maturitní zkoušku.
                    ''',
                    "Odmaturujete v pohodě a beze strachu z neúspěchu!",
                    "Rozsah si volíte sami dle vašich znalostí a potřeb.",
            ],
            "hesla": [
                "Odmaturujete v pohodě a beze strachu z neúspěchu!",
                "Rozsah si volíte sami dle vašich znalostí a potřeb.",

            ],
            "obsah":[
                    "propočítávání praktických příkladů zaměřených na jednotlivá účetní témata (rozvaha, otevření účtů, účtování v účetních knihách, uzávěrka, výpočet hospodářského výsledku)",
                    "propočítávání praktických souvislých příkladů (zásoby, dlouhodobý majetek, závazky, pohledávky, vlastní zdroje krytí, individuální podnikatel, náklady, časové rozlišení nákladů a výnosů, finanční pronájem, výnosy, hospodářský výsledek, převod a rozdělování zisku)",
                    "řešení komplexních příkladů v daňové evidenci (otevření a vedení peněžního deníku a ostatních účetních knih, uzávěrka, výpočet zisku a daně z příjmu fyzických osob, výpočet zdravotního a sociálního pojištění podnikatele)",
                    "procvičování účetnictví a daňové evidence na PC (účetní program používaný na OA)",
                    "opakovací hodiny z účetnictví",
                    "doučování z účetnictví dle individuálních potřeb",
                    ]
        },
        {
            "id": 2,
            "url": "/vyukove/",
            "nadpis": "VYSOKOŠKOLÁK",
            "foto": "vysoka.jpg",
            "cena": "",
            "trvani": "",
            "popis": [
                '''
                    Splnil se vám sen a dostali jste se až na vysokou školu? 
                ''',
                '''
                    A najednou nejde všechno podle vašich představ?                
                ''',
                '''
                    Představovali jste si to snazší? Nezoufejte!
                '''
            ],
            "obsah": [
                        "opakovací hodiny z daní na základě daňových zákonů ČR (dle individuálních potřeb na jednotlivá témata)",
                        "propočítávání praktických příkladů zaměřených na jednotlivá témata z daní (daň z příjmu fyzických osob, daň z příjmu právnických osob, daně majetkové, DPH)",
                        "propočítávání souvislých praktických příkladů z daní(obdoba příkladů ke zkoušce nebo k zápočtu)",
                        "doučování daní dle individuálních potřeb",
                        "výuka a doučování z daňové evidence dle individuálních potřeb",
                        "opakovací hodiny z finančního účetnictví na základě zákona o účetnictví (dle individuálních potřeb na jednotlivá témata)",
                        "propočítávání praktických příkladů zaměřených na jednotlivá témata z účetnictví (zásoby, dlouhodobý majetek, závazky, pohledávky, vlastní zdroje krytí, individuální podnikatel, náklady, výnosy, uzávěrkové operace, hospodářský výsledek, rozdělení zisku, daň z příjmu)",
                        "propočítávání souvislých praktických příkladů z účetnictví (obdoba příkladů ke zkoušce nebo k zápočtu)",
                        "doučování finančního účetnictví dle individuálních potřeb"
                      ]
        },

    ]

    return jsonify({
        'data': singleCardContent
    })




if __name__ == '__main__':
    app.run()