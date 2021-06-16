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

if __name__ == '__main__':
  check_superstore()