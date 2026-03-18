def parrot_trouble(talking, hour):
  return talking and (hour < 7 or hour > 20)


parrot_trouble(True, 6)
parrot_trouble(True, 7) 
parrot_trouble(True, 21)