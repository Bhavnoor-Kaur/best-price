import os
import time




url = 'https://www.realcanadiansuperstore.ca/search?search-bar=Apple'

from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.keys import Keys
from selenium import webdriver


#path where browser is installed
binary = '/usr/bin/firefox'
options = webdriver.FirefoxOptions()
options.binary = binary
options.add_argument('start-maximized')
options.add_argument('--headless')


cap = DesiredCapabilities().FIREFOX
cap["marionette"] = False


path_to_driver = "/home/msnanda515/geckodriver"

# run firefox webdriver from executable path 
driver = webdriver.Firefox(firefox_options=options, capabilities=cap, executable_path = path_to_driver)
#driver = webdriver.Firefox(capabilities=cap, executable_path = path_to_driver)

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

