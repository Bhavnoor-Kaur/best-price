from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os
import time
from threading import Thread
from bs4 import BeautifulSoup

result = []

def make_url(search):
  '''
  Builds the url from the given Search keyword
  :param search (string): the keyword to search
  :return add: url of the search page
  '''
  base = 'https://www.realcanadiansuperstore.ca/search?search-bar='
  search = search.split()
  # Build the relevant format of the URL
  add = base + search[0]
  if len(search) > 1:
    for i in range(1, len(search)):
      add += '%20'
      add += search[i] 
  return add


def query_price(search):
  global result
  # Get a valid url
  url = make_url(search)

  opts = Options()
  opts.add_argument(" --headless")
  opts.binary_location= '/usr/bin/google-chrome'
  chrome_driver = os.getcwd() +"/chromedriver_ubuntu"
  driver = webdriver.Chrome(options=opts, executable_path=chrome_driver)
  try:
    driver.get(url)
    # print(innerHTML.get_attribute("innerText"))
    # Sleep is required to give time to the browser to render the HTML after executing all the scripts
    time.sleep(5)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    item_list = soup.find_all('span', class_='price__value comparison-price-list__item__price__value')
    itemObj = {'item': search, 'price': item_list[0].get_text()}
    result.append(itemObj)
    # print(search + ',' + item_list[0].text) TODO Can be used to print the price
  except Exception as e:
    print("[Exception]", e)
  finally:
    driver.quit()


def get_super_prices(items):
  '''
  Prints out the price of items
  :param items: list of items to query
  :returns result The list of prices
  '''
  global result
  # Start individual threads to make queries
  list_threads = []
  for i in range(0, len(items)):
    new_thread = Thread(target=query_price, args=(items[i],))
    list_threads.append(new_thread)
    new_thread.start()
  for query_threads in list_threads:
    query_threads.join()
  return result

if __name__ == "__main__":
  result = get_super_prices(["apple", "mango"])
  print(result)
