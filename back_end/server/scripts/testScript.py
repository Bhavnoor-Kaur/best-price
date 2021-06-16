import json
from superstoreAgent import get_prices

items = [
  'apple', 'brown rice', 'grapes', 'milk', 'carrots', 'chicken', 'pasta'
]

def check_superstore():
  '''
  Checks the price of items at superstore
  '''
  global items
  print("****Superstore Prices***")
  get_prices(items)

def load_items():
  '''
  Loads items from the json file
  :param None
  :returns None
  '''
  global items
  # Read the json file
  try:
    with open('./data/query.json') as infile:
      data = json.load(infile)
      items = data['items']
  except Exception as e:
    print("[Exception]", e)
  


if __name__ == '__main__':
  load_items()
  check_superstore()