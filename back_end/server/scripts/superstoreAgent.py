import requests
from bs4 import BeautifulSoup

url = 'https://www.realcanadiansuperstore.ca/search?search-bar=Apple'

page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')

firstPrice = soup.find_all('li', class_='comparison-price-list__item')
print(firstPrice)

# print(soup)