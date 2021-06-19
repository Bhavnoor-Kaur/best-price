from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from bs4 import BeautifulSoup

opts = Options()
opts.add_argument(" --headless")
opts.binary_location= '/usr/bin/google-chrome'
chrome_driver = os.getcwd() +"/chromedriver"
driver = webdriver.Chrome(options=opts, executable_path=chrome_driver)
url = 'https://www.realcanadiansuperstore.ca/search?search-bar=apple'
driver.get(url)
time.sleep(10)
print(driver.title)
soup = BeautifulSoup(driver.page_source, 'html_parser')
firstPrice = soup.find_all('li', class_='comparison-price-list__item')
print(len(firstPrice))
# item_list = driver.find_elements_by_css_selector('span.price__value.comparison-price-list__item__price__value')
# print(len(item_list))s

driver.quit()
