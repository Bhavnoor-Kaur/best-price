from selenium import webdriver
from selenium.common import exceptions
import pandas as pd
# search-result-gridview-item-wrapper
# class="product-price-with-fulfillment"
browser = webdriver.Chrome('D:\DOWNLOADS\Setups\ChromeDriver\chromedriver.exe')


item_name = input('What do you want to search for? ')
item_url = 'https://www.walmart.ca/search?q=' + item_name

browser.get(item_url)
item_list = browser.find_elements_by_css_selector('span.css-2vqe5n.esdkp3p0')

print(item_list[0].text)