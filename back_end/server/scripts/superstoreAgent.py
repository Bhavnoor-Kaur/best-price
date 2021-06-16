import requests
from bs4 import BeautifulSoup

url = 'https://www.realcanadiansuperstore.ca/search?search-bar=Apple'

# page = requests.get(url)

# soup = BeautifulSoup(page.content, 'html.parser')

# firstPrice = soup.find_all('li', class_='comparison-price-list__item')
# print(firstPrice)

# print(soup)

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


# Instantiate an Options object
# and add the "--headless" argument
opts = Options()
opts.add_argument(" --headless")
# If necessary set the path to you browser’s location
opts.binary_location= '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
# Set the location of the webdriver
chrome_driver = os.getcwd() +"/chromedriver"
# Instantiate a webdriver
driver = webdriver.Chrome(options=opts, executable_path=chrome_driver)
# driver = webdriver.Chrome(chrome_driver)
# Load the HTML page
driver.get(url)
# innerHTML = driver.execute_script("return document.body")
# WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.ID,"ptifrmtgtframe")))
# WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH, "//span[@id='HRS_APPL_WRK_HRS_PAGE_TITLE']")))
# print(innerHTML.get_attribute("innerText"))
time.sleep(2)
html = driver.execute_script("return document.getElementsByTagName('html')[0].innerHTML")
# print(html)
# soup_source = driver.page_source
# soup = BeautifulSoup(soup_source, 'html.parser')

# firstPrice = soup.find_all('li', class_='comparison-price-list__item')
item_list = driver.find_elements_by_css_selector('span.price__value.comparison-price-list__item__price__value')
print(item_list[0].text)
# print(driver.find_element_by_css_selector('li.comparison-price-list__item'))
driver.quit()


# print(soup.prettify())

# print(soup.title.get_text())


# item_url = 'https://www.walmart.ca/search?q=apple'

# driver.get(item_url)

# print(item_list[0].text)

