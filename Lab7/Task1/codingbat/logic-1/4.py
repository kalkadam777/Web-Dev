def caught_speeding(speed, is_birthday):
  if is_birthday:
    if speed<=65:
      return 0
    elif 65<=speed<=85:
      return 1
    elif speed>85:
      return 2
  else:
    if speed<=60:
      return 0
    elif 61<=speed<=80:
      return 1
    elif speed>81:
      return 2
