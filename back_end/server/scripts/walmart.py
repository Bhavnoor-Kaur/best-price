from selenium import webdriver
from selenium.common import exceptions
import pandas as pd
import time

# Change path to your driver's path!
browser = webdriver.Chrome('D:\DOWNLOADS\Setups\ChromeDriver\chromedriver.exe')

def make_url(search):
    count = 0
    word = ""
    item_name_words = []
    item_url = 'https://www.walmart.ca/search?q='
    for letter in search:
        count+=1
        if letter == " ":
            item_name_words.append(word)
            word = ""

        elif count == len(search):
            word+=search[-1]
            item_name_words.append(word)

        else:
            word+=letter

    if len(item_name_words) == 1:
        item_url+=search

    else:
        for i in range(len(item_name_words)-1):
            item_url+=item_name_words[i]
            item_url+= '%20'
        
        item_url+=item_name_words[-1]


    return item_url

def query_price(search):
    url = make_url(search)
    browser.get(url)
    item_list = browser.find_elements_by_css_selector('span.css-2vqe5n.esdkp3p0')
    return item_list[0].text

def get_super_prices(items):
    result = []
    for item in items:
        result.append(query_price(item))
        time.sleep(1)

    return result

itemz = ["banana", "carrot", "monkey toy"]
print(get_super_prices(itemz))