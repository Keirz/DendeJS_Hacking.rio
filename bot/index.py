# from dotenv import dotenv_values
# config = dotenv_values(".env")
# print(config['TESTE'])

state=10
def teste():
  global state
  print(state)

def main():
  
  state =12
  teste()


if __name__ == '__main__':
    main()